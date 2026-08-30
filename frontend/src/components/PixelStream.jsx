
import usePixelStream from '../hooks/usePixelStream'



export default function PixelStream(){

    const { containerRef } = usePixelStream();

    return(
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%"
            }}
        
        />


    );
}