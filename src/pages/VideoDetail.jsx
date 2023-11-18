import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const location = useLocation();

  const {
    state: { video },
  } = useLocation();
  console.log(video);
console.log(video.id);
//   console.log(location.state.video);

const {title, channelId, channelTitle} = video.snippet;

  return (
    <>
      <iframe
        id='player'
        type='text/html'
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder='0'
      ></iframe>

      <div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle}/>
      </div>
    </>
  );
}
