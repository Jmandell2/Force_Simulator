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

                <p className="side-link">GitHub</p>
                <p className="side-link">Website</p>
            </div>
        </aside>
    );
}