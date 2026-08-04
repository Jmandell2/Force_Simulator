
import PixelStream from './PixelStream'
import playIcon from "../assets/play.png";


export default function UnrealPanel(){

    const divStyle={
        position:'absolute',
        top: '-95%',
    };
    const streamStyle={};

    // TODO: fix styling and color of p

    return(
        <div style={{position:'relative', bottom: '250px', backgroundColor: 'yellow'}}>
            <div className="border-[14px] border-[#FA0A0A] bg-[rgba(217,217,217,0.00)] w-[950px] h-[550px]" style={divStyle}>
                <div style={{position: 'relative', display: 'flex', flexDirection: 'row', justifyContent:'center', gap: '76px', top: '105%'}}>
                    <p>Instructions</p>
                    <p>Menu</p>
                    <p>Backgrounds</p>
                    <img src={playIcon} alt="play"/>

                </div>
            </div>
            <PixelStream/>
        </div>
    );



}