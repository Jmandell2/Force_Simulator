

from fastapi import APIRouter, WebSocket
from app.utils.image import bytes_to_image
from app.model.hand_tracker import HandTracker
from app.data_classes.force_vector import ForceVector


def calculate_difference(current, previous):
    difference_threshold = .002
    x_dif = current.x - previous.x
    if abs(x_dif) < difference_threshold:
        return 0
    if x_dif > 0:
        return 1
    return 2

def calculate_height(current, previous):
    difference_threshold = .001
    min_height = .01
    y_dif = current.y - previous.y
    if y_dif >= 0:
        print('move up = false')
        return 'false'
    else:
    # if y_dif > 0 and y_dif > difference_threshold and current.y > min_height:
        print('move up = true')
        return 'true'
    print('move up = false')
    return 'false'



def past_threshold(coordinates):
    left_threshold = .02 # range 0,1 left - right
    right_threshold = .85

    return coordinates.x <= left_threshold and coordinates.x >= right_threshold


'''
calculates the direction of your vector
- returns your direction, and wasHand
- if your hand is beyond a threshold, return wasHand = false
- else true
'''
def calculate_direction(current, previous, wasHand):
    # TODO: deal with when you get thrown beyond the threshold (have it walk back)
    # maybe only check threshold if previous wasHand

    # if there wasnt a hand before
    # there is a new hand registered, so just return up (0)
    if not wasHand:
        return[True, 0, 'false']

    # if there was a hand before
    current_wrist = current.landmark[0]
    print('current wrist x, y', current_wrist.x, ' ', current_wrist.y)
    previous_wrist = previous.landmark[0]
    print('previous wrist x, y', previous_wrist.x, ' ', previous_wrist.y)


    if past_threshold(current_wrist):
        previous = current
        print('past threshold, returning 0')
        return [False, 0, 'false']

    print('not past threshold, giving you a direction actually')

    #TODO: pass in an additional bool based on the verrical difference
    output = [True, calculate_difference(current_wrist, previous_wrist), calculate_height(current_wrist, previous_wrist)]
    previous = current
    return output
        # if absolute hand location 
        # calculate the difference
    


'''
 purpose: create a websocket to connect to the frontend
 receive webcam images and send on to yolo model
registers ws route, and callback function for receiving images

router that you can register to a fast api server
'''
router = APIRouter()

@router.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # TODO: add in websocket connection error handling
    hand_tracker = HandTracker()
    # socket connection to send json over to unreal
    unreal_server = websocket.app.state.unreal_server
    # starts in different background task, so it doesn't wait eternally for someone to close it


    # save previous prediction

    previous_prediction = None
    wasHand = False

    while True:
        print('backend awaiting image from frontend')
        image_bytes = await websocket.receive_bytes()
        print("got image from frontend")

        image = bytes_to_image(image_bytes)

        hand_prediction = hand_tracker.predict(image)
        if hand_prediction == None:
            print('no hand detected')
            await unreal_server.send_vector({'hands': 'none', 'velocity': '0', 'direction': '0', 'move_up' : 'false'})
            wasHand = False
            previous_prediction = None
            continue
        else:
            print('hand detected')

        # calculate direction here and pass in
        hand = calculate_direction(hand_prediction, previous_prediction, wasHand)
        force_vec = ForceVector(hand)
        wasHand = hand[0]
        previous_prediction = hand_prediction

        await unreal_server.send_vector(force_vec.json_output())





