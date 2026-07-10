

from fastapi import APIRouter, WebSocket
from app.utils.image import bytes_to_image
from app.unreal.unreal_client import UnrealClient
from app.model.hand_tracker import HandTracker
from app.data_classes.force_vector import ForceVector


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

    hand_tracker = HandTracker()
    # socket connection to send json over to unreal
    unreal_client = UnrealClient()

    while True:
        image_bytes = await websocket.receive_bytes()
        print("got image")

        image = bytes_to_image(image_bytes)

        hand_prediction = hand_tracker.predict(image)
        force_vec = ForceVector(hand_prediction)
        unreal_client.send_vector(force_vec.json_output())





