
import Triangle from './Triangle'

export default function Dashboard(){

    return(
        <div className="bg-[#161221] min-w-screen min-h-screen overflow-hidden">
            <p className="text-[#FD0A0A] font-judson text-2xl w-[99px] h-14 absolute left-[135px] top-[59px]">
                Force Simulator
            </p>

            <Triangle/>
      
            <p className="text-[#FFF] font-judson text-2xl w-[123px] h-7 absolute left-[378px] top-[828px]">
                Instructions
            </p>

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
            <p className="text-[#FFF] font-judson text-2xl w-[133px] h-7 absolute left-[1232px] top-[255px]">
                View Camera
            </p>


            <div className="w-[102px] h-[107px] absolute left-6 top-[34px]"></div>
            <div className="border-[14px] border-[#FA0A0A] bg-[rgba(217,217,217,0.00)] w-[202px] h-[202px] absolute left-[1198px] top-[34px]"></div>
            <div className="w-[87px] h-[87px] absolute left-[27px] top-[776px]"></div>
            <div className="bg-[rgba(217,217,217,0.00)] w-[824px] h-[488px] absolute left-[302px] top-[268px]"></div>
            <div className="w-[110px] h-28 absolute left-[677px] top-[456px]">
                <div className="w-[129px] h-[146px] absolute left-[787px] top-[447px]"></div>
                <div className="w-[78px] h-[88px] absolute left-[758px] top-[473px]"></div>
            </div>

      </div>




    );
}