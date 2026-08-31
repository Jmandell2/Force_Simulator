
from app.config import settings
import websockets
import json

# TODO: adjust so you're checking your client for a token verifying that it's from unreal
# TODO: adjust so that each client gets its own port

class UnrealServer:

    NETWORK_INTERFACES = '0.0.0.0'
    PORT = 8080

     
    async def handle_client(self, websocket):
        print('client connected')

        self.unreal_connection = websocket

        try:
            async for message in websocket:
                print('received:', message)
                self.data = json.loads(message)
                print(self.data)
        except websockets.exceptions.ConnectionClosed:
            print('client disconnected')
        finally:
            self.unreal_connection = None

    async def start(self):
        # wait for your server to be created before you continue
        self.server = await websockets.serve(
                    self.handle_client,
                    self.NETWORK_INTERFACES,
                    self.PORT,
                )
        print('websocket server running on port 8080')
        # wait for external closing of the server, run other tasks until it does
        await self.server.wait_closed()


    def __init__(self):
        # listener
        self.server = None
        # your unreal connection
        self.unreal_connection = None

        
    async def send_vector(self, vec):
        '''
            where you actually send your json over to unreal
        '''
        if self.unreal_connection is None:
            print('unreal not connected')
            return
        await self.unreal_connection.send(
            json.dumps(vec)
        )