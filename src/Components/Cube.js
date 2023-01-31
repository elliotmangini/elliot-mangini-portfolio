import React, { useRef, useEffect, useState } from 'react';
import '../StyleSheets/Cube.css';

import gif1 from '../Assets/CubeGifs/planetariyumGif.gif';
import gif2 from '../Assets/CubeGifs/174Gif.gif';
import gif3 from '../Assets/CubeGifs/TraydPostGif.gif';
import gif4 from '../Assets/CubeGifs/UpQuestGif.gif';



export default function Cube ({selectedProject}) {

  let videos = [
    gif1,
    gif2,
    gif3,
    gif4,
  ]

  const [ randomGif , setRandomGif ] = useState(videos[Math.floor(Math.random() * videos.length)]);

  useEffect(() => {
    if (selectedProject === "") {
      changeVideo();
    }
  }, [selectedProject])

  function changeVideo () {
    setRandomGif(videos[Math.floor(Math.random() * videos.length)]);
  }


  const cubeRef = useRef();
  useEffect(() => {
    const cube = cubeRef.current;
    // let rotation = 0;
    function rotateCube() {
      // const cube = cubeRef.current;
    
      // Calculate new rotation values
      let rotationX = Math.sin(Date.now() / 50000);
      let rotationY = Math.sin(Date.now() / 90000);
      let rotationZ = Math.sin(Date.now() / 70000);
    
      // Apply rotation values to cube
      cube.style.transform = `rotateX(${rotationX}turn) rotateY(${rotationY}turn) rotateZ(${rotationZ}turn)`;
    
      requestAnimationFrame(rotateCube);
    }
    requestAnimationFrame(rotateCube);
  }, []);
  
    return (
        <>
          <div onClick={() => changeVideo()} className={`cube ${selectedProject ? "slide_down" : "slide_up"}`} ref={cubeRef}>
              <div className="face front">
              <img src={randomGif} alt="front gif" />
              </div>
              <div className="face back">
              <img src={randomGif} alt="back gif" />
              </div>
              <div className="face left">
              <img src={randomGif} alt="left gif" />
              </div>
              <div className="face right">
              <img src={randomGif} alt="right gif" />
              </div>
              <div className="face top">
              <img src={randomGif} alt="top gif" />
              </div>
              <div className="face bottom">
              <img src={randomGif} alt="bottom gif" />
              </div>
        </div>
        </>
    );
}