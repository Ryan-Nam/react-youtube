import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function Videos() {
    
    const {keyword} = useParams();
    console.log(keyword);


    const [hottrend, setHottrend] = useState('');

    useEffect(()=> {
      fetch('/videos/popular.json')
        .then((res)=> res.json())
        .then((data)=>setHottrend(data));
    }, []);

  return (
    <>
    <div>Video 
      {keyword ? `🔍${keyword}` : '🔥Hot Trend'}
    </div>
    <div>{hottrend}</div>

    {/* {hottrend.map((list) => (
      <div key={list.id}>
        <div>{list.items}</div>
      </div>
    ))} */}
  
    </>

  );
}
