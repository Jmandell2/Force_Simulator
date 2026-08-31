import { useState, useEffect, useRef } from "react";
import { createSocket } from "../services/websocket";

export function useSimulationSocket() {

    const socketRef = useRef(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {

        console.log("Creating backend WebSocket");

        const socket = createSocket();

        socketRef.current = socket;

        socket.onopen = () => {
            console.log("CONNECTED TO BACKEND");
            setConnected(true);
        };

        socket.onclose = (event) => {
            console.log("BACKEND SOCKET CLOSED", event.code);
            setConnected(false);
        };

        socket.onerror = (error) => {
            console.error("BACKEND SOCKET ERROR", error);
        };

        return () => {
            console.log("Cleaning up backend WebSocket");

            socket.close();
            socketRef.current = null;
        };

    }, []);

    function sendFrame(blob) {

        if (!socketRef.current) {
            console.log("No socket exists");
            return;
        }

        if (socketRef.current.readyState !== WebSocket.OPEN) {
            console.log(
                "Socket exists but isn't open. State:",
                socketRef.current.readyState
            );
            return;
        }

        console.log("SENDING FRAME TO BACKEND");

        socketRef.current.send(blob);
    }

    return {
        connected,
        sendFrame
    };
}