from fastapi import fastAPI
from app.api.websocket import router as webdsocket_router



def main():

    # connect to your websockets
    # TODO: may need to start this
    app = FastAPI()
    # adds the routes registered for this router to your fast api app 
    app.include_router(websocket_router)

    # wait to receive image from your frontend

    # run yolo on it

    # calculate force vector

    # send to unreal





    print("Hello from backend!")


if __name__ == "__main__":
    main()
