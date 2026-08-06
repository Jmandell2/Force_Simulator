
import Triangle from './Triangle'
import Frame from './Frame'
import WebcamPanel from './WebcamPanel'
import UnrealPanel from './UnrealPanel'
import playIcon from "../assets/play.png";
import circle from "../assets/circle.png";
import triangle from "../assets/triangle.png";
import SidePanel from './SidePanel'







export default function Dashboard(){

    return(
        <div>
            <WebcamPanel/>
            <UnrealPanel />
            <SidePanel/>
      </div>




    );
}


