
import numpy as np
import cv2


# TODO: need to check the format you're getting image from webcam
# TODO: create test 

def bytes_to_image(data: bytes) -> np.ndarray:
    """
    args: 
        - data: object of type bytes, the bytes being sent over
    return: 
        - np.ndarray

    purpose: Decode JPEG/PNG bytes from websocket into
            an OpenCV BGR image.
            open cv expects a numpy array
    """

    # Convert bytes -> uint8 numpy buffer
    buffer = np.frombuffer(data, dtype=np.uint8)

    # switch your color to bgr, gives you your actual pixel values from bytes
    image = cv2.imdecode(buffer, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("Could not decode image")

    return image






