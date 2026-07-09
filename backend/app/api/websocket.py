# purpose: create a websocket to connect to the frontend
# receive webcam images and send on to yolo model

from fastapi import APIRouter, WebSocket
from app.utils.image import bytes_to_image

# TODO: import predictor

# registers ws route, and callback function for receiving images

# router that you can register to a fast api server
router = APIRouter()

@router.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # TODO: load yolo model here
    # TODO: load unreal connection to send vector to

    while True:
        image_bytes = await websocket.receive_bytes()
        print("got image")

        # TODO: implement transform image bytes into an image (utils/image_processor)
        image = bytes_to_image(image_bytes)
        # TODO: send image to predictor
        
        # TODO: get vector back (custom class resembling a json probably)

        # TODO: send this image to your yolo server





