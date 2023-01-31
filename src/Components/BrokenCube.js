import React, { useRef, useEffect } from 'react';
import '../StyleSheets/BrokenCube.css';

import broken from '../Assets/CubeGifs/brokencube2.gif';



export default function Cube ({selectedProject, isLeaving}) {
    const cubeRef = useRef();
    useEffect(() => {
      const cube = cubeRef.current;
      // let rotation = 0;
      function rotateCube() {
        // const cube = cubeRef.current;
      
        // Calculate new rotation values
        let rotationX = Math.sin(Date.now() / 210000);
        let rotationY = Math.sin(Date.now() / 450000);
        let rotationZ = Math.sin(Date.now() / 290000);
      
        // Apply rotation values to cube
        cube.style.transform = `rotateX(${rotationX}turn) rotateY(${rotationY}turn) rotateZ(${rotationZ}turn)`;
      
        requestAnimationFrame(rotateCube);
      }
      requestAnimationFrame(rotateCube);
    }, []);
  
    return (
        <>
          <div className={`smokecontainer ${selectedProject && !isLeaving ? "smoke_in" : "smoke_out" }`}>
              {Array.from({length: 10}).map((_, i) => {
                let delay = Math.random() * -1;
                let marginRight = (Math.random() * 40) - 60;
                return <div key={i} className="thicksmoke" style={{animationDelay: `${delay}s`, marginRight: `${marginRight}px`}}></div>
              })}
          </div>

          <div className={`brokencube ${selectedProject && !isLeaving ? "brokenslide_up" : "brokenslide_down" }`} ref={cubeRef}>
                <div className="brokenface brokenfront">
                <img src={broken} alt="front gif" />
                </div>
                <div className="brokenface brokenback">
                <img src={broken} alt="back gif" />
                </div>
                <div className="brokenface brokenleft">
                <img src={broken} alt="left gif" />
                </div>
                <div className="brokenface brokenright">
                <img src={broken} alt="right gif" />
                </div>
                <div className="brokenface brokentop">
                <img src={broken} alt="top gif" />
                </div>
                <div className="brokenface brokenbottom">
                <img src={broken} alt="bottom gif" />
                </div>
          </div>
          <div className={`smokecontainer ${selectedProject && !isLeaving ? "smoke_in" : "smoke_out"}`}>
              {Array.from({length: 10}).map((_, i) => {
                let delay = Math.random() * -1;
                let marginRight = (Math.random() * 40) - 40;
                return <div key={i} className="smoke" style={{animationDelay: `${delay}s`, marginRight: `${marginRight}px`}}></div>
              })}
          </div>
        </>
    );
}