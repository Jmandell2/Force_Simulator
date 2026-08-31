## Issues:

- Frontend is trying to connect to wrong websocket ip
    - should connect to http://127.0.0.1:8000
    - trying to connect to ws://localhost:5173/127.0.0.8
    - Attempting to connect from useSimulationSocket