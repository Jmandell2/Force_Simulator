
from app.config import settings
import websockets
import json

class UnrealClient:

    def __init__(self):
        self.socket_connection = await websockets.connect(f"ws://{settings.unreal_host}:{settings.unreal_port}")
        # TODO: get actual unreal ip address

    def send_vector(vec):
        '''
            where you actually send your json over to unreal
        '''
        await self.websocket.send(
            json.dumps(vec)
        )