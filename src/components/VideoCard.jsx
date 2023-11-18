import React from "react";
// import {format, register} from 'timeago.js';
import { formatAgo } from '../util/data';
// import koLocal from 'timeago.js/lib/lang/ko';
import { useNavigate } from 'react-router-dom';

// register('ko',koLocal);

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/videos/watch/${video.id}`,{state: {video}}); //key: video, object:video  state: {video:video}

  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  

  return (
    <li onClick={handleClick}>
      <img className='w-full' src={thumbnails.medium.url} alt={title}></img>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
