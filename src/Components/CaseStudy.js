
import style from '../StyleSheets/CaseStudy.module.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import SocialLinks from './SocialLinks';
import Curtains from './Curtains';
import StageBack from './StageBack';


export default function CaseStudy ({project, projectsData}) {
    const [ isIntroing , setIsIntroing ] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [ route , setRoute ] = useState((projectsData[(((project.index + 1) + projectsData.length) % projectsData.length)].route));

    // check for a refresh
    setTimeout(() => {
        setIsIntroing(false);
        setTimeout(() => {
            checkIfPlaying();
        }, 100)
    }, 8000);

    const videoRef = useRef(null);

    // Function to check if the video is playing
    const checkIfPlaying = () => {
        // Check if the video is paused
        if (videoRef.current.paused) {
        // Update the isPlaying state
        setIsPlaying(false);
        } else {
        // Update the isPlaying state
        setIsPlaying(true);
        }
    }

    function handlePlay () {
        videoRef.current.play();
        setIsPlaying(true);
    }

    function findNextVideo () {
        // setIsPlaying(false);
        setRoute(projectsData[(((project.index + 1) + projectsData.length) % projectsData.length)].route);

    }

    return (
        <>
            <StageBack />
            <div className={style.video_container}>
            <div className={style.placeholder_screen}></div>
            { !isIntroing ? 
            <>
                <video id={style.caseVideo} autoPlay ref={videoRef}>
                    <source src={project.video} type="video/mp4" />
                </video>
                {/* play button! */}
                {!isPlaying ?
                <div onClick={() => handlePlay()} className={style.play_button}></div>
                : null }
            </>
            : null }
            </div>
            <SocialLinks effect={"longest sneakin"} />
            <Curtains effect={isIntroing ? "swoosh" : "stable"} />
            <div className={style.theatre_controls}>
                <div className={`${style.theatre_button} ${style.exit_theatre}`}><Link className={style.exit_link} to="/">Exit Theatre</Link></div>
                <div className={`${style.theatre_button} ${style.next_film}`}><Link onClick={findNextVideo} className={style.exit_link} to={`/${route}`}>Next Film</Link></div>
            </div>
            <div className={style.fancy_title}><span>All About</span><br />{project.title}</div>
        </>
    )
}