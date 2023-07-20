import React from 'react';
import videoBg from '../assets/videoBg.mp4';

const Main = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1><b>Success</b></h1>
        <p>Success is finding tranquility in the midst of life's storms, just as the ocean remains calm beneath its ever-changing surface.</p>
      </div>
    </div>
  );
}

export default Main;
