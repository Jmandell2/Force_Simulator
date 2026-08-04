
import usePixelStream from '../hooks/usePixelStream'


export default function PixelStream(){

    const { videoRef } = usePixelStream();

    return(
        <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
                width: "100%",
                height: "100%"
            }}
        
        />


    );
}