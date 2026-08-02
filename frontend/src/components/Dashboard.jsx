
import Triangle from './Triangle'
import Frame from './Frame'
import WebcamPanel from './WebcamPanel'

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


