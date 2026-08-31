import pytest
import asyncio
import websockets
import json
import cv2
from pathlib import Path
from backend.app.unreal.unreal_server import UnrealServer
from app.model.hand_tracker import HandTracker



# TODO: implement testing


# -------------------------
# Unreal Client tests
# -------------------------

UNREAL_SERVER = UnrealServer()

def test_uc_server_test():
    assert UNREAL_SERVER.server == None

def test_uc_connect_test():
    assert UNREAL_SERVER.unreal_connection == None

@pytest.mark.asyncio
async def test_uc_start():
    server_task = asyncio.create_task(UNREAL_SERVER.start())
    await asyncio.sleep(0.1)

    assert UNREAL_SERVER.server is not None

    # Clean up the server
    UNREAL_SERVER.server.close()
    # waits for the closing process to 
    await UNREAL_SERVER.server.wait_closed()

    # Clean up the start() task
    await server_task

@pytest.mark.asyncio
async def test_handle_client():
    server = await websockets.serve(
        UNREAL_SERVER.handle_client,
        UNREAL_SERVER.NETWORK_INTERFACES,
        UNREAL_SERVER.PORT,
    )
    async with websockets.connect("ws://localhost:8080") as websocket:
        await websocket.send(json.dumps({"x": 10, "y": 20}))

        await asyncio.sleep(0.1)

        assert UNREAL_SERVER.unreal_connection is not None
        assert UNREAL_SERVER.data['x'] == 10
        assert UNREAL_SERVER.data['y'] == 20
    server.close()
    await server.wait_closed()

# -------------------------
# Hand Tracker tests
# -------------------------

HAND_TRACKER = HandTracker()

TEST_IMAGES = Path(__file__).parent / "test_images"

HAND1_PATH = TEST_IMAGES / "hand_test.jpeg"
HAND2_PATH = TEST_IMAGES / "hand_test2.jpeg"

image1 = cv2.imread(HAND1_PATH)
image2 = cv2.imread(HAND2_PATH)

def test_hands_init():
    assert HAND_TRACKER.hands != None

def test_hands_tracking1():
    assert image1.any() == True

def test_hands_tracking2():
    assert image2.any() == True

def test_hands_prediction1():
    prediction = HAND_TRACKER.predict(image1)
    assert prediction != None

def test_hands_prediction2():
    prediction = HAND_TRACKER.predict(image2)
    wrist = prediction.landmark[0]
    assert prediction != None
    print(wrist.x, ' prediction wrist x')
    print(wrist.y, ' prediction wrist y')
    print(wrist.z, ' prediction wrist z')









    
