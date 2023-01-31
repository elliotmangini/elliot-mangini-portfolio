import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useEffect, useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import SocialLinks from './SocialLinks';
import Cube from './Cube';
import BrokenCube from './BrokenCube';
import EmailPopup from './EmailPopup';
import { v4 as uuid } from "uuid";
import MatrixTitle from './MatrixTitle';
import StageBack from './StageBack';
import Curtains from './Curtains';


export default function Elliot ({updateTooltip, projectsData , setIsInternalRoute}) {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);
    const [ popUpOpen , setPopUpOpen ] = useState("");
    const [ hasEverSelected , setHasEverSelected ] = useState(false);
    const [ targetString, setTargetString] = useState("Software Engineer ::");

    // console.log({
    //     selectedProject,
    //     isClicked,
    //     go,
    //     isLeaving,
    //     popUpOpen,
    //     hasEverSelected,
    //     targetString,
    // })

    const phrases = [
        "Audio Engineer Turned Software Developer",
        "Lifelong Creator · Problem Solver · Maker",
        "Humorist · Explorer · Humble Human",
        "Enthusiastic · Flexible · Focused",
        "Student · Teacher · Seeker",
    ]

    

    const projects = projectsData.map((p) => {
        return (
            <Project 
            setIsInternalRoute={setIsInternalRoute} 
            hasEverSelected={hasEverSelected} 
            setHasEverSelected={setHasEverSelected} 
            projectsData={projectsData} 
            isLeaving={isLeaving} 
            setIsLeaving={setIsLeaving} 
            go={go} 
            setGo={setGo} 
            setIsClicked={setIsClicked} 
            isClicked={isClicked} 
            selectedProject={selectedProject} 
            setSelectedProject={setSelectedProject} 
            key={uuid()} p={p} />
        )
    })

    function handlePopups (popUpClicked) {
        if (popUpOpen === popUpClicked) {
            closePopUps();
            setHasEverSelected(false);
        } else {
            openPopUp(popUpClicked);
            if (popUpClicked === "email") {
                setTargetString("Looking forward to meeting you ^_^")
                // FORSEEING A PROBLEM HERE ??
                // setStringStable(false);
            }
        }
    }

    function closePopUps () {
        setPopUpOpen("");
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
        // setReadyForMatrix(false);
        setTargetString("Software Engineer ::");
        // FORSEEING A PROBLEM HERE ??
        // setIsDelayNeeded(true);
    }

    function openPopUp (popUpClicked) {
        // console.log("setting pop up open to the one you just clicked");
        setPopUpOpen(popUpClicked);
        // console.log("it is now: " + popUpClicked);
        setSelectedProject(null);
        setHasEverSelected(true);
    }

    // "back" button function
    function clickDeselect () {
        if (popUpOpen) {
            closePopUps();
        }
        setHasEverSelected(false);
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
    }

    return (
        <>
            <div className={style.elliot}>

                {/* KEEP THIS SHIT AT THE TOP */}
                {/* background video */}
                <div id={style.video_container}>
                    <div id={style.cover}></div>
                    <div onClick={() => console.log("click")}  className={`${style.darken} ${selectedProject ? style.darkenest : null}`}></div>
                    <video id={style.myVideo} loop autoPlay muted><source src={video} type="video/mp4" /></video>
                </div>

                { isLeaving ? <>
                    <StageBack animation={"coming"} />
                </> : null }


                {/* { selectedProject && */}
                <>
                    <BrokenCube isLeaving={isLeaving} selectedProject={selectedProject} hasEverSelected={hasEverSelected}/>
                </>
                {/* } */}

                {/* rotating cube of gifs */}
                <div className={`${style.fade_overlay} ${popUpOpen ? style.focus_cube : null}`}>
                    <Cube selectedProject={selectedProject} />
                </div>


                {/* main contained stuff */}
                <div className={style.reactive_width_container}>
                    {/* projects list */}
                    <div className={`${isLeaving ? style.reverse : null} ${style.add_drift_up} ${style.position_projects}`}>
                        {projects}
                    </div>

                    {/* site title */}
                    <MatrixTitle 
                        targetString={targetString}
                        setTargetString={setTargetString}
                        popUpOpen={popUpOpen}
                        isLeaving={isLeaving}
                        phrases={phrases}
                        selectedProject={selectedProject}
                        clickDeselect={clickDeselect}
                    />

                </div>

                { isLeaving ? <>
                    <Curtains effect={"coming"} />
                </> : null }
                    
                {/* links */}
                <SocialLinks updateTooltip={updateTooltip} isLeaving={isLeaving} handlePopups={handlePopups} />


                {/* popups! */}
                { popUpOpen === "resume" ?
                <Resume closePopUps={() => handlePopups("resume")} updateTooltip={updateTooltip} />
                : null}

                { popUpOpen === "email" ?
                <EmailPopup closePopUps={() => handlePopups("email")} />
                : null}
                
            </div>

        </>
    );
};