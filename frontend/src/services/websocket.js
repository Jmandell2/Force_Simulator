// connects with your yolo server
// gets predictions from your yolo server

// actually implements the connection between frontend and backend

// get the ip of your backend
// route = /ws


const WS_IP = import.meta.env.VITE_BACKEND_HOST;
const WS_PORT = import.meta.env.VITE_BACKEND_PORT;
const WS_URL = `ws://${WS_IP}:${WS_PORT}/ws`;


export function createSocket() {

    console.log("Creating WebSocket:", WS_URL);

    return new WebSocket(WS_URL);
}