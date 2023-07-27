import React from "react";
// import {format, register} from 'timeago.js';
import { formatAgo } from '../util/data';
// import koLocal from 'timeago.js/lib/lang/ko';

// register('ko',koLocal);

export default function VideoCard({ video }) {
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url} alt={title}></img>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
