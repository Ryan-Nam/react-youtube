import { Link } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const {keyword} = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setText('');
    navigate(`/videos/${text}`);
  };
  //whenever keyword is changed, run useEffect
  useEffect(()=>{setText(keyword || '')},[keyword])

 

  return (
    <header className='flex border-b'>
      <Link to='/' className="flex ml-2">
        <BsYoutube className="text-3xl"/>
        <h1 className='ml-2'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search..'
          value={text}
          onChange={handleChange}
        />
        <button>
          <BsSearch />
        </button>
      </form>
      {/* {keyword} */}
    </header>
  );
}
