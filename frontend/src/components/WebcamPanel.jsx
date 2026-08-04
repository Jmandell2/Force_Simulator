

import Webcam from './Webcam'
import Frame from './Frame'

// TODO: Standardize css passing methodology
// TODO: scale down webcam

export default function WebcamPanel(){
    const frameStyle = {
        position: 'absolute',
        top: '.6%',
        right: '3.7%',

    }
    const webcamStyle = {}
    const textStyle = {
        position: 'absolute',
        bottom: '15px',
        fontSize: 15,
        left: '150px',
    }

    return(
        <div style={{position: 'relative', height: '400px', width: '400px', margin: '10% 190%'}}>
            <Frame style={frameStyle}/>
             <Webcam />
             <p className="text-[#FFF] font-judson text-2xl w-[100px] h-5" style={textStyle}>
                View Camera
            </p>
        </div>
        
    );
}