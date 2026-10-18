from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.api.websocket import router as websocket_router
from app.unreal.unreal_server import UnrealServer
import asyncio


@asynccontextmanager
async def lifespan(app:FastAPI):
    app.state.unreal_server = UnrealServer()

    unreal_task = asyncio.create_task(
        app.state.unreal_server.start()
    )
    yield

    app.state.unreal_server.server.close()
    unreal_task.cancel()


app = FastAPI(lifespan=lifespan)

    # adds the routes registered for this router to your fast api app 
app.include_router(websocket_router)

    # TODO: annotate all your functions
    # TODO: private/public/protected all your functions (check python default)
    # TODO: implement scripting to run backend automatically
    # TODO: update your ip addresses with their actual values
    # TODO: implement/run tests
    # TODO: update readme/documentation

    # testing out unreal client
    # connect to your websockets
    

    # wait to receive image from your frontend

    # run yolo on it

    # calculate force vector

    # send to unreal

