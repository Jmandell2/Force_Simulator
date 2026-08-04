// should be connecting to the unreal socket 
// provide a listening function to trigger when you get an image back
// TODO: wtf is pixel stream? 

import { useRef, useEffect } from 'react';


import {connectUnreal} from '../services/unreal'


export default function UsePixelStream(){

    const videoRef = useRef(null);

    useEffect(() => {

        if (!videoRef.current)
            return;

        const connection = connectUnreal(videoRef.current);

        return () => {
            connection.close?.();
        };

    }, []);

    return {
        videoRef
    };

}