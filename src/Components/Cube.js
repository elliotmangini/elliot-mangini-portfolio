import React, { useRef, useEffect } from 'react';
import '../StyleSheets/Cube.css';

import gif1 from '../Assets/CubeGifs/planetariyumGif.gif';
import gif2 from '../Assets/CubeGifs/174Gif.gif';
import gif3 from '../Assets/CubeGifs/TraydPostGif.gif';
import gif4 from '../Assets/CubeGifs/UpQuestGif.gif';
import gif5 from '../Assets/CubeGifs/BigSisHypeGif.gif';
import gif6 from '../Assets/CubeGifs/BigSisHypeGif.gif';



export default function Cube ({selectedProject}) {
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
          <div className={`cube ${selectedProject ? "slide_down" : "slide_up"}`} ref={cubeRef}>
              <div className="face front">
              <img src={gif2} alt="front gif" />
              </div>
              <div className="face back">
              <img src={gif2} alt="back gif" />
              </div>
              <div className="face left">
              <img src={gif2} alt="left gif" />
              </div>
              <div className="face right">
              <img src={gif2} alt="right gif" />
              </div>
              <div className="face top">
              <img src={gif2} alt="top gif" />
              </div>
              <div className="face bottom">
              <img src={gif2} alt="bottom gif" />
              </div>
        </div>
        </>
    );
}