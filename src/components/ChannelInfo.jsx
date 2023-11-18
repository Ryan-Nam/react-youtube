import React from 'react';
import { useYoutubeApi } from './../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({id, name}) {
    const {youtube} = useYoutubeApi();
    const {data:url} = useQuery(['channel', id], () => youtube.channelImageURL(id));
    console.log(`console url: ${url}`);
    return (
        <div>
            Channel Thumbnail img and name
            {url && <img src={url} alt={name} />}
            <p>{name}</p>
        </div>
    );
}

