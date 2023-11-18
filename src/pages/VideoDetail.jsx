import React from 'react';
import {useLocation} from 'react-router-dom';

export default function VideoDetail() {


    const location = useLocation();

    const {state: {video}} = useLocation();
    // console.log(video);

    console.log(location.state.video);
    
    
    return (
        <div>
            Video Details
            Video name:~~
            date: ~~
        </div>
    );
}

