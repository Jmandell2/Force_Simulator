from fastapi import fastAPI
from app.api.websocket import router as webdsocket_router



def main():
    # TODO: annotate all your functions
    # TODO: private/public/protected all your functions (check python default)
    # TODO: implement scripting to run backend automatically
    # TODO: update your ip addresses with their actual values
    # TODO: implement/run tests
    # TODO: update readme/documentation

    # connect to your websockets
    # TODO: may need to start this with uvicorn
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
