
import { useEffect, useRef } from "react";
import { createSocket } from "../services/socket";


export function useSimulationSocket(){
    
    // reference to your socket
    const socketRef = useRef(null);

    const [connected, setConnected] = useState(false);

    // what loads initially for the component
    useEffect(() =>{

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

            if(
                socketRef.current &&
                socketRef.current.readyState === WebSocket.OPEN
            ){

                socketRef.current.send(blob);

            }

        }


        return {
            connected,
            sendFrame
        };


}

