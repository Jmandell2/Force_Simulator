// connects with your unreal server
// receives an image from unreal server

// TODO: switch to actual ue ip from an env file
const UE_IP = "123.4.3.2";


export function connectUnreal(videoElement){

    const socket = new WebSocket(UE_IP);
    // creates peer connection
    const peer = new RTCPeerConnection();

    // sets the callback
    peer.ontrack = (event) => {
        // sets your video element to the first stream you gete
        videoElement.srcObject = event.streams[0];

    };

    // 4. Exchange signaling messages over the websocket
    socket.onmessage = async (message) => {
        console.log(message, " message received via websocket");
        // Handle SDP offers
        // Handle ICE candidates
    };

    return {
        socket,
        peer
    };
}

