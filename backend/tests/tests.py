import pytest
import asyncio
import websockets
import json
from app.unreal.unreal_client import UnrealClient


# TODO: implement testing

UNREAL_CLIENT = UnrealClient()

def test_uc_server_test():
    assert UNREAL_CLIENT.server == None

def test_uc_connect_test():
    assert UNREAL_CLIENT.unreal_connection == None

@pytest.mark.asyncio
async def test_uc_start():
    server_task = asyncio.create_task(UNREAL_CLIENT.start())
    await asyncio.sleep(0.1)

    assert UNREAL_CLIENT.server is not None

    # Clean up the server
    UNREAL_CLIENT.server.close()
    # waits for the closing process to 
    await UNREAL_CLIENT.server.wait_closed()

    # Clean up the start() task
    await server_task

@pytest.mark.asyncio
async def test_handle_client():
    server = await websockets.serve(
        UNREAL_CLIENT.handle_client,
        UNREAL_CLIENT.NETWORK_INTERFACES,
        UNREAL_CLIENT.PORT,
    )
    async with websockets.connect("ws://localhost:8080") as websocket:
        await websocket.send(json.dumps({"x": 10, "y": 20}))

        await asyncio.sleep(0.1)

        assert UNREAL_CLIENT.unreal_connection is not None
        assert UNREAL_CLIENT.data['x'] == 10
        assert UNREAL_CLIENT.data['y'] == 20
    server.close()
    await server.wait_closed()


    
