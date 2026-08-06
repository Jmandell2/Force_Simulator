
import circle from "../assets/circle.png";
import triangle from "../assets/triangle.png";
import Triangle from './Triangle'




export default function SidePanel(){



    return(
        <div className="leftBar" style={{position:'absolute', bottom: '-34%',left: '-35%', display: 'flex', flexDirection: 'column'}}>
                        
                        <div className="min-w-screen min-h-screen absolute left-6 top-[34px]"></div>
                        <img src={triangle} alt="Play"/>
                        <p style={{marginLeft:'-6px', marginBottom: '390px', marginTop: '2px'}}>Force Simulator</p>
                        <img src={circle} alt="circle" style={{position: 'relative', left: '20px', bottom: '20px',height:80, width: 80}}/>
                        <p style={{marginLeft:'-10px', marginBottom: '20px'}}>GitHub</p>
                        <p style={{marginLeft:'-10px', marginBottom: '20px'}}>Website</p>
                    </div>
    );
}