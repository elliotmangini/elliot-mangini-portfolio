import style from '../StyleSheets/Elliot.module.css'
import video from '../Assets/enterbkg.mp4'
import { useEffect, useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import SocialLinks from './SocialLinks';
import Cube from './Cube';
import EmailPopup from './EmailPopup';
import { v4 as uuid } from "uuid";
import SlotMachine from './SlotMachine';
import StageBack from './StageBack';
import Curtains from './Curtains';


export default function Elliot ({projectsData}) {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);
    const [ popUp , setPopUp ] = useState("");
    const [ hasEverSelected , setHasEverSelected ] = useState(false);

    const projects = projectsData.map((p) => {
        return (
            <Project hasEverSelected={hasEverSelected} setHasEverSelected={setHasEverSelected} projectsData={projectsData} isLeaving={isLeaving} setIsLeaving={setIsLeaving} go={go} setGo={setGo} setIsClicked={setIsClicked} isClicked={isClicked} selectedProject={selectedProject} setSelectedProject={setSelectedProject} key={uuid()} p={p} />
        )
    })

    function handlePopups (desired) {
        if (popUp === desired) {
            showList();
            setHasEverSelected(false);
        } else {
            // IF THERE IS NO CURRENT POPUP
            hideList();
            setPopUp(desired);
            setHasEverSelected(true);
        }
    }

    function showList () {
        setPopUp("");
        setSelectedProject("");
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
    }

    function hideList () {
        setSelectedProject(null);
    }

    return (
        <>
            <div className={style.elliot}>

                {/* KEEP THIS SHIT AT THE TOP */}
                {/* background video */}
                <div id={style.video_container}>
                    <div id={style.cover}></div>
                    <div className={`${style.darken} ${selectedProject ? style.darkenest : null}`}></div>
                    <video id="myVideo" loop autoPlay muted><source src={video} type="video/mp4" /></video>
                </div>

                { isLeaving ? <>
                    <StageBack animation={"coming"} />
                </> : null }


                {/* rotating cube of gifs */}
                <div className={`${style.fade_overlay} ${popUp ? style.focus_cube : null}`}>
                    <Cube selectedProject={selectedProject} />
                </div>


                {/* main contained stuff */}
                <div className={style.reactive_width_container}>

                    {/* site title */}
                    <h1 className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title} ${isLeaving ? style.main_title_away : null }`}>Elliot Mangini<span>Software Engineer ::</span></h1>

                    {/* slot machine */}
                    {/* <SlotMachine phrases={phrases} /> */}

                    {/* projects list */}
                    <div className={`${style.add_drift_up} ${style.position_projects}`}>
                        {projects}
                    </div>
                </div>

                { isLeaving ? <>
                    <Curtains effect={"coming"} />
                </> : null }
                    
                {/* links */}
                <SocialLinks isLeaving={isLeaving} handlePopups={handlePopups} />


                {/* popups! */}
                { popUp === "resume" ?
                <Resume />
                : null}

                { popUp === "email" ?
                <EmailPopup showList={showList} />
                : null}
                
            </div>

        </>
    );
};