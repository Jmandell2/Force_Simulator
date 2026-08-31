// connects with your yolo server
// gets predictions from your yolo server

// actually implements the connection between frontend and backend

// get the ip of your backend
// route = /ws


// TODO: get the url from your env folder
const WS_IP = import.meta.env.VITE_BACKEND_HOST;
const WS_PORT = import.meta.env.VITE_BACKEND_PORT;


export function createSocket(){
    
    console.log(" 1.) websocket launching");

    console.log("attempting to connect to:", `ws://${WS_IP}:${WS_PORT}/ws`);


    // TODO: catch connection failure errors 
    const socket = new WebSocket(
        `ws://${WS_IP}:${WS_PORT}/ws`
    );    


    socket.onerror = (error) => {
        console.log("WebSocket error:", error);
    };


    socket.onopen = () => {
        console.log("WebSocket connected");
    };


    socket.onclose = () => {
        console.log("WebSocket closed");
    };

    return socket;
}