



export default function PixelStream(){

    const { videoRef } = usePixelStreaming();

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