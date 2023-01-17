// import colors from '../StyleSheets/Elliot.module.css'
import style from '../StyleSheets/CaseStudy.module.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import SocialLinks from './SocialLinks';
import Curtains from './Curtains';
import StageBack from './StageBack';
import Resume from './Resume';
import EmailPopup from './EmailPopup';


export default function CaseStudy ({isInternalRoute , project, projectsData}) {
    const [ isIntroing , setIsIntroing ] = useState(true);
    const [ isPlaying, setIsPlaying] = useState(Boolean(isInternalRoute));
    const [ nextRoute ,setNextRoute ] = useState(projectsData[(((project.index + 1) + projectsData.length) % projectsData.length)]);
    const [ activeProject , setActiveProject ] = useState(project);
    const [ isFinished, setIsFinished] = useState(false);
    const [ popUpOpen , setPopUpOpen ] = useState("");

    function closePopUps() {
        setPopUpOpen("");
    }

    function handlePopUps(target) {
        if (popUpOpen === target) {
            setPopUpOpen("");
        } else {
            setPopUpOpen(target);
        }
    }

    // Play after curtain animation.
    setTimeout(() => {
        setIsIntroing(false);
    }, 8000);

    const videoRef = useRef(null);
    function handlePlay () {
        setIsPlaying(true);
        videoRef.current.play();
    }

    function findNextVideo () {
        setIsPlaying(true);
        setActiveProject(projectsData[(((project.index + 1) + projectsData.length) % projectsData.length)]);
        setNextRoute(projectsData[(((project.index + 2) + projectsData.length) % projectsData.length)]);
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = activeProject.video;
            return () => {
                if (videoRef.current) {
                    videoRef.current.src = ''
                }
            }
        }
    }, [activeProject]);

    function videoEnded () {
        setIsFinished(true);
        // setIsPlaying(false);
    }

    return (
        <>
            <StageBack />
            <div className={style.video_container}>
            <div className={style.placeholder_screen}></div>

            { !isIntroing ? 
            <>
                <video id={style.caseVideo} autoPlay ref={videoRef} onEnded={() => videoEnded()}>
                    <source src={project.video} type="video/mp4" />
                </video>
                {/* play button! */}
                {!isPlaying ?
                <div onClick={() => handlePlay()} className={style.play_button}></div>
                : null }
            </>
            : null }

            </div>
            <SocialLinks handlePopups={handlePopUps} effect={"longest sneakin"} />
            <Curtains effect={isIntroing ? "swoosh" : "stable"} />
            <div className={style.theatre_controls}>
                <div className={`${style.theatre_button} ${style.exit_theatre}`}><Link className={style.exit_link} to="/">Exit Theatre</Link></div>
                <div className={`${style.theatre_button} ${style.next_film}`}><Link onClick={() => findNextVideo()} className={style.exit_link} to={`/${nextRoute.route}`}>Next Film</Link></div>
            </div>
            <div className={style.fancy_title}><span>All About</span><br />{project.title}</div>

            {isFinished && !isPlaying ?
            <div className={style.theatrePopUp}>
                Get in <span onClick={() => handlePopUps("email")}>Contact</span> with me or-- <br />check out <Link onClick={() => findNextVideo()} className={style.exit_link} to={`/${nextRoute.route}`}>Next Film</Link>!
            </div>
            : null }

            {/* popups! */}
            { popUpOpen === "resume" ?
            <Resume closePopUps={() => closePopUps()} />
            : null}

            { popUpOpen === "email" ?
            <EmailPopup closePopUps={() => closePopUps()} />
            : null}
        </>
    )
}