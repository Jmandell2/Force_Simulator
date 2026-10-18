import PixelStream from './PixelStream';
import playIcon from '../assets/play.png';

export default function UnrealPanel() {
    return (
        <section className="unreal-panel">
            <div className="stream-frame">
                <PixelStream />
            </div>

        </section>
    );
}