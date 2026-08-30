// connects with your unreal server
// receives an image from unreal server

import {PixelStreaming} from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.8';

// TODO: switch to actual ue ip from an env file
const UE_IP = import.meta.env.VITE_UE_IP;
const UE_PORT = import.meta.env.VITE_UE_PORT|| "80";


export function connectUnreal(videoContainer){

    const config = {
        AutoConnect: true,
        ss: 'ws://${UE_IP}:${UE_PORT}',
    };

    const streaming = new PixelStreaming(config);

    // library creates its own <video> element internally
    videoContainer.appendChild(streaming.videoElementParent);

    streaming.addEventListener('playStreamRejected', (e) => {
        console.error('stream rejected', e);
    }
    );

    streaming.addEventListener('webRtcConnected', (e) => {
        console.log('Web rtc connected');
    }
    );

    streaming.addEventListener('webRtcDisconnected', (e) => {
        console.log('Web rtc disconnected');
    }

    );


    return {
        streaming, close: () => streaming.disconnect();
    };
}

