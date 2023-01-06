import React, { useRef, useEffect } from 'react';
import '../StyleSheets/Cube.css';

import front from '../Assets/CubeGifs/front.gif';


export default function Cube () {
    const cubeRef = useRef();
    useEffect(() => {
    //   const cube = cubeRef.current;
    //   let rotation = 0;
      function rotateCube() {
        const cube = cubeRef.current;
      
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
        <div className="cube" ref={cubeRef}>
            <div className="face front">
            <img src={front} alt="front gif" />
            </div>
            <div className="face back">
            <img src={front} alt="back gif" />
            </div>
            <div className="face left">
            <img src={front} alt="left gif" />
            </div>
            <div className="face right">
            <img src={front} alt="right gif" />
            </div>
            <div className="face top">
            <img src={front} alt="top gif" />
            </div>
            <div className="face bottom">
            <img src={front} alt="bottom gif" />
            </div>
        </div>
        </>
    );
}