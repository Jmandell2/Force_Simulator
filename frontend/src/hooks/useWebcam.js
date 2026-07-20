// creates your camera
// starts it running but doesnt capture it
import { useEffect, useRef, useState } from "react";

export function useWebcam(){
    
    // your video html object you're directing your stream to
    const videoRef = useRef(null);

    // video stream you're getting
    const [stream, setStream] = useState(null);


    useEffect(() => {

        async function startCamera(){

            const mediaStream = await navigator.mediaDevices.getUserMedia(
                {video:true}
            );

            setStream(mediaStream);

            if(videoRef.current){
                videoRef.current.srcObject = mediaStream;
            }

        }

        startCamera();

        return ()=>{

            if(stream){

                stream
                .getTracks()
                .forEach(track => track.stop());

            }

        };


    }, [])



    return {
        videoRef,
        stream
    }
} 