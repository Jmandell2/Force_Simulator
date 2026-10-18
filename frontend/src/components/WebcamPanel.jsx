import Webcam from './Webcam';
import Frame from './Frame';

export default function WebcamPanel() {
    return (
        <section className="webcam-panel">
            <div className="webcam-frame">
                <Webcam />
            </div>

            <p className="webcam-label">
                View Camera
            </p>
        </section>
    );
}