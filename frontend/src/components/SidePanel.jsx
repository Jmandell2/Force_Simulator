import circle from '../assets/circle.png';
import triangle from '../assets/triangle.png';

export default function SidePanel() {
    return (
        <aside className="side-panel">
            <div className="side-panel-top">
                <img
                    src={triangle}
                    alt="Force Simulator logo"
                    className="side-logo"
                />

            </div>

            <div className="side-panel-bottom">

                <img
                    src={circle}
                    alt="Circle"
                    className="side-circle"
                />

                <a
                className="side-link"
                href="https://github.com/Jmandell2/Force_Simulator"
                target="_blank"
                rel="noopener noreferrer"
                >
                GitHub
                </a>                
                <p className="side-link">Website</p>
            </div>
        </aside>
    );
}