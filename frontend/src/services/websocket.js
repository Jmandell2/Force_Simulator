// connects with your yolo server
// gets predictions from your yolo server

// actually implements the connection between frontend and backend

// get the ip of your backend
// route = /ws


// TODO: get the url from your env folder
const WS_IP = "127.0.0.8";


export function createSocket(){
    

    // TODO: catch connection failure errors 
    const socket = new WebSocket(WS_IP);

    return socket;
}