

from fastapi import APIRouter, WebSocket
from app.utils.image import bytes_to_image
from app.model.hand_tracker import HandTracker
from app.data_classes.force_vector import ForceVector


def calculate_difference(current, previous):
    difference_threshold = .1
    x_dif = current.x - previous.x
    if abs(x_dif) <= .1:
        return 0
    if x_dif > 0:
        return 1
    return 2



def past_threshold(coordinates):
    left_threshold = .2 # range 0,1 left - right
    right_threshold = .8
    up_threshold = .2 # range 0, 1 top - bottom
    down_threshold = .8

    return coordinates.x >= left_threshold and coordinates.x <= right_threshold and coordinates.y >= up_threshold and coordinates.y <= down_threshold


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
        return[True, 0]

    # if there was a hand before
    current_wrist = current[0]
    previous_wrist = previous[0]

    if past_threshold(current_wrist):
        previous = current
        return [False, 0]

    output = [True, calculate_difference(current_wrist, previous_wrist)]
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
            await unreal_server.send_vector({'hands': 'none', 'velocity': '0', 'direction': '0'})
            wasHand = False
            previous_prediction = None
            continue

        # calculate direction here and pass in
        hand = calculate_direction(hand_prediction, previous_prediction, wasHand)
        force_vec = ForceVector(hand)
        wasHand = hand[0]
        previous_prediction = hand_prediction

        await unreal_server.send_vector(force_vec.json_output())





