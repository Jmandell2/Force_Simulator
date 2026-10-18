// should be connecting to the unreal socket 
// provide a listening function to trigger when you get an image back
// TODO: wtf is pixel stream? 

import { useRef, useEffect } from 'react';
import {connectUnreal} from '../services/unreal'


export default function UsePixelStream(){

    const containerRef = useRef(null);

    useEffect(
        () => {
            const container = containerRef.current;
            if(!container) return;

            const connection = connectUnreal(container);

            return () => {
                connection.close?.();
                container.innerHTML = '';
            };

        }, []
    );

    return {containerRef};

}