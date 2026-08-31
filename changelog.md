## Issues:

- Frontend is trying to connect to wrong websocket ip
    - should connect to http://127.0.0.1:8000
    - trying to connect to ws://localhost:5173/127.0.0.8
    - Attempting to connect from useSimulationSocket
- Backend is creating a new unreal client every time a browser tries to connect
    - store one global version and access it from your separate classes
- Frontend looks different depending on your browser type spacing wise
- Reorganize your .env files