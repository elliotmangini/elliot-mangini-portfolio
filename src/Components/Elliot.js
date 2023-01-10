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


export default function Elliot ({projectsData , setIsInternalRoute}) {
    const [ selectedProject , setSelectedProject ] = useState("")
    const [ isClicked , setIsClicked ] = useState(false);
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);
    const [ popUpOpen , setPopUpOpen ] = useState("");
    const [ hasEverSelected , setHasEverSelected ] = useState(false);


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
            showList();
            setHasEverSelected(false);
            setTargetString("Software Engineer ::");
        } else {
            // IF THERE IS NO CURRENT popUpOpen
            hideList();
            setPopUpOpen(popUpClicked);
            setHasEverSelected(true);
            if (popUpClicked === "email") {
                setTargetString("Looking forward to meeting you ^_^")
                setStringStable(false);
            } else {
            }
        }
    }

    function showList () {
        setPopUpOpen("");
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
    }

    function hideList () {
        setSelectedProject(null);
    }

    let [currentString, setCurrentString] = useState("Software Engineer ::");
    let [targetString, setTargetString] = useState("Software Engineer ::");
    let [stringStable , setStringStable] = useState(true);


    function matrixString (difficulty) {
        if (currentString !== targetString) {
            let newString = "";
            for (let i = 0; i < targetString.length; i++) {
                if (targetString[i] !== currentString[i]) {
                    // make the following line cleaner
                    if (targetString[i] === " " || targetString[i] === "·" || targetString[i] === ":" || targetString[i] === "^" || targetString[i] === "_") {
                        newString += targetString[i];
                    }
                    if (targetString[i] !== " ") {
                        let newCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                        // it breaks if the random character it chooses is the same twice in a row
                        if (newCharacter === currentString[i]) {
                            if (currentString[i] === "x") {
                                newString += "o";
                            } else {
                                newCharacter = "x";
                            }
                        }
                        newString += (Math.random() < difficulty ? targetString[i] : newCharacter);
                    }
                } else {
                    newString += targetString[i];
                }
            }
            setCurrentString(newString);
        } else {
            setStringStable(true);
        }
    }
    
    useEffect(() => {
        if (!stringStable && currentString !== "Looking forward to meeting you ^_^") {
            setTimeout(() => {
                matrixString(.06);
                console.log("action")
            }, 55)
        }
    }, [currentString, targetString])


    function nextPhrase () {
        console.log("inside nextPhrase popUpOpen is . . .")
        console.log(popUpOpen)
        if (popUpOpen) {
            let newString = phrases[0];
            for (let i = 0; i < phrases.length; i++) {
                if (currentString === phrases[i]) {
                    newString = phrases[(i + 1) % phrases.length]
                }
            }
            console.log("setting target to: " + newString);
            setTargetString(newString);
            setStringStable(false);
        }
    }

    // Handle Phrase Target Setting
    useEffect(() => {
        console.log("popUpOpen or stringStabilization change")
        console.log("inside useEffect popUpOpen is . . .")
        console.log(popUpOpen);
        console.log("Stabilized: "+ stringStable);
        if (stringStable && popUpOpen) {
            console.log("calling next phrase in 5 seconds")
            setTimeout(() => {
                console.log("calling next phrase")
                nextPhrase();
            }, 4500)
        }
    }, [stringStable, popUpOpen])

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
                <div className={`${style.fade_overlay} ${popUpOpen ? style.focus_cube : null}`}>
                    <Cube selectedProject={selectedProject} />
                </div>


                {/* main contained stuff */}
                <div className={style.reactive_width_container}>

                    {/* site title */}
                    <h1 className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title} ${isLeaving ? style.main_title_away : null }`}>Elliot Mangini<span>{currentString}</span></h1>

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
                { popUpOpen === "resume" ?
                <Resume />
                : null}

                { popUpOpen === "email" ?
                <EmailPopup showList={showList} />
                : null}
                
            </div>

        </>
    );
};