import { useEffect, useRef } from "react";

import { useWebcam } from "../hooks/useWebcam";
import { useSimulationSocket } from "../hooks/useSimulationSocket";



// your webcam component <Webcam>
function Webcam(){

    // the video feed from the webcam
    // encircling it in const just means everything you get in this object is a const
    

    console.log("about to call use webcam (webcam)");
   
    const {
        videoRef
    } = useWebcam();


    console.log("about to call use simulation socket (webcam)");

    // stores your sendframe funciton to call later
    // you need to store it rather than just importing and calling it because
    // it stores a socket reference in it, so you need to initialize it and then call
    const {
        connected, 
        sendFrame
    } = useSimulationSocket();


    const canvasRef = useRef(null);



    useEffect(()=>{

        // you store the return in interval so you can clear it later
        // especially if you have multiple intervals
        // stored in use effect because once you run set interval it keeps running
        // if you put this in a component that re renders itll keep creating new timers
        const interval = setInterval(()=>{

            console.log("in interval (webcam)");



            if(!videoRef.current || !canvasRef.current){
                console.log("VIdeo ref not current or canvas ref not current [WEBCAM}")
                return;
            }


            const video = videoRef.current;


            const canvas = canvasRef.current;


            const context =
                canvas.getContext("2d");


            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            console.log("about to draw image (webcam)");


            // gets your image to the canvas, so you can send the canvas over to backend
            context.drawImage(
                video,
                0,
                0,
                canvas.width,
                canvas.height
            );

            console.log("about to send  blob (webcam)");

            if(connected){
                canvas.toBlob(
                (blob)=>{

                    if(blob){
                        sendFrame(blob);
                    }

                },
                "image/jpeg",
                0.8
                );

            } else {
                console.log("not connected, not sending blob");
            }
            


        },100); // 10 FPS, TODO: set your sample rate here


        return ()=>clearInterval(interval);


    },[]);



    return (
        <div>
            <h1>please work</h1>
            
            <p>
                WebSocket:
                {connected ? "Connected" : "Disconnected"}
            </p>
            
            {/* video is whats actually being shown on screen */}
            <video
                ref={videoRef}
                autoPlay
                style={{
                width: "400px",
                height: "300px",
                objectFit: "cover"
            }}
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