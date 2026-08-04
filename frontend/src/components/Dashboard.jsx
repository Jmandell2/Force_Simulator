
import Triangle from './Triangle'
import Frame from './Frame'
import WebcamPanel from './WebcamPanel'
import UnrealPanel from './UnrealPanel'
import playIcon from "../assets/play.png";
import circle from "../assets/circle.png";
import triangle from "../assets/triangle.png";





export default function Dashboard(){

    return(
        <div>
            {/*
             <p className="text-[#FFF] font-judson text-2xl w-[123px] h-7 absolute left-[20%] top-[20%]">
                Instructions
            </p>

            
            <p className="text-[#FD0A0A] font-judson text-2xl w-[99px] h-14 absolute left-[10%] top-[8%]">
                Force Simulator
            </p>

            */}

            <WebcamPanel/>
            <UnrealPanel />

            <div className="leftBar" style={{position:'absolute', bottom: '-14%',left: '-35%', display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}>
                
                <div className="min-w-screen min-h-screen absolute left-6 top-[34px]"></div>
                <img src={triangle} alt="Play"/>
                <p style={{marginLeft:'-10px', marginBottom: '440px'}}>Force Simulator</p>
                <img src={circle} alt="circle"/>
                <p style={{marginLeft:'-10px', marginBottom: '20px'}}>GitHub</p>
                <p style={{marginLeft:'-10px'}}>Website</p>
            </div>

            {/* 
           

            <p className="text-[#FFF] font-judson text-2xl w-32 h-7 absolute left-6 top-[879px]">
                Joel Mandell
            </p>
            <p className="text-[#FFF] font-judson text-2xl w-[71px] h-7 absolute left-6 top-[967px]">
                GitHub
            </p>
            <p className="text-[#FFF] font-judson text-2xl w-[89px] h-7 absolute left-[25px] top-[923px]">
                Portfolio
            </p>
            <p className="text-[#FFF] font-judson text-2xl w-[58px] h-7 absolute left-[685px] top-[828px]">
                Menu
            </p>
            <p className="text-[#FFF] font-judson text-2xl w-[132px] h-7 absolute left-[927px] top-[828px]">
                Backgrounds
            </p>
            

            */}

            <Triangle/>

      </div>




    );
}


