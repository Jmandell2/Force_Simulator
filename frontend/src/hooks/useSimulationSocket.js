
import { useState, useEffect, useRef } from "react";
import { createSocket } from "../services/websocket";


export function useSimulationSocket(){
    
    // reference to your socket
    const socketRef = useRef(null);

    const [connected, setConnected] = useState(false);

    // what loads initially for the component
    useEffect(() =>{

        console.log("in use simulation socket, about to create socket");

        const socket = createSocket();
        socketRef.current = socket;


        socket.onopen = () => {
            console.log("Connected to backend websocket");
            setConnected(true);
        };


        socket.onclose = () => {
            console.log("Disconnected");
            setConnected(false);
        };


        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        return () => {
            socket.close();
        };

    }, []);


    function sendFrame(blob){

        console.log("about to send frame");
            if(
                socketRef.current &&
                socketRef.current.readyState === WebSocket.OPEN
            ){
                socketRef.current.send(blob);
            }
            console.log("frame sent");
        }

        return {
            connected,
            sendFrame
        };

}

