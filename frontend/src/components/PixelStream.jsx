import usePixelStream from '../hooks/usePixelStream';

export default function PixelStream() {
    const { containerRef } = usePixelStream();

    return (
        <div
            ref={containerRef}
            className="pixel-stream-container"
        />
    );
}