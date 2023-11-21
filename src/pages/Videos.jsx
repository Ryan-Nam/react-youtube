import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';
import VideoCard from "../components/VideoCard";
import Youtube, { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutubeClient";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  // console.log(keyword);

  const { youtube } = useYoutubeApi();
  // same as const data = useContext(YoutubeApiContext)

  // react-query axios way
  // const fetchSuperHeres = () => {
  //   return axios
  //   .get('http://localhost:4000/dummy')
  //   .then((res) => {
  //     return res.data.items;
  //   });
  // };
  // const {isLoading, data: videos} = useQuery(['super-heros', keywordss], fetchSuperHeres)

  // if (isLoading) {
  //   return <h2>I am Loaaaaaaaadddding~</h2>
  //}

  // 키들의 연속, videos라는 키 안에, keyword별로 캐시가 되도록 만들어주고...
  // 두번째 인자는 우리가 어떻게 네트워크를 통신할껀지 정의할 수 있는 콜백함수
  //     const {isLoading, error, data:videos} = useQuery(['video', keyword], async ()=> {return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
  //   .then(res => res.json())
  //   .then(data => data.items);
  // });

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["video", keyword], () => youtube.search(keyword));

  return (
    <>
      {/* <div>
        Video
        {keyword ? `🔍${keyword}` : "🔥Hot Trend"}
      </div> */}

      {/* 
{videos ? (
        videos.map((hero) => {
          return (
            <div key={hero.id} className='text-white'>
              {hero.snippet.title}
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )} */}

      {/* isLoading 이라면? <p>tag 리턴 */}
      {isLoading && <p>Loading....</p>}
      {error && <p>Error: Something is Wrong</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
