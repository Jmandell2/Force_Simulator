import { useEffect, useRef } from "react";

import { useWebcam } from "../hooks/useWebcam";
import { useSimulationSocket } from "../hooks/useSimulationSocket";


function Webcam(){

    // the video feed from the webcam
    const {
        videoRef
    } = useWebcam();


    // stores your sendframe funciton to call later
    const {
        sendFrame,
        connected
    } = useSimulationSocket();


    const canvasRef = useRef(null);



    useEffect(()=>{


        const interval = setInterval(()=>{


            if(!videoRef.current)
                return;


            const video = videoRef.current;


            const canvas = canvasRef.current;


            const context =
                canvas.getContext("2d");


            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;


            context.drawImage(
                video,
                0,
                0,
                canvas.width,
                canvas.height
            );


            canvas.toBlob(
                (blob)=>{

                    if(blob){
                        sendFrame(blob);
                    }

                },
                "image/jpeg",
                0.8
            );


        },100); // 10 FPS


        return ()=>clearInterval(interval);


    },[]);



    return (
        <div>

            <p>
                WebSocket:
                {connected ? "Connected" : "Disconnected"}
            </p>


            <video
                ref={videoRef}
                autoPlay
            />


            <canvas
                ref={canvasRef}
                style={{
                    display:"none"
                }}
            />

        </div>
    );

}


export default Webcam;