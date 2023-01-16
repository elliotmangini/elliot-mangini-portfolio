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
    // const [ readyForMatrix , setReadyForMatrix ] = useState(false);


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
                setStringStable(false);
            } else {
                // setTimeout(() => {
                    // setReadyForMatrix(true);
                // }, 4500)
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
        SetIsDelayNeeded(true);
    }

    function openPopUp (popUpClicked) {
        // console.log("setting pop up open to the one you just clicked");
        setPopUpOpen(popUpClicked);
        // console.log("it is now: " + popUpClicked);
        setSelectedProject(null);
        setHasEverSelected(true);
    }

    let [currentString, setCurrentString] = useState("Software Engineer ::");
    let [targetString, setTargetString] = useState("Software Engineer ::");
    let [stringStable , setStringStable] = useState(true);


    // if EVER the target string and current string arent the same, it will start animating
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
            // console.log("")
            SetIsDelayNeeded(true);
        }
    }
    useEffect(() => {
        if ((currentString !== targetString) && (currentString !== "Looking forward to meeting you ^_^")) {
            setTimeout(() => {
                matrixString(.06);
                // console.log("action")
            }, 55)
        } else {
            setStringStable(true);
            SetIsDelayNeeded(true);
        }
    }, [currentString, targetString])

    // Handle Phrase Target Setting
    useEffect(() => {
        setTimeout(() => {
            if (stringStable && popUpOpen && isDelayNeeded) {
                SetIsDelayNeeded(false);
            }
        }, 3500);
    }, [stringStable, popUpOpen])

    const [ isDelayNeeded , SetIsDelayNeeded ] = useState(true);
    // console.log(isDelayNeeded);

    function nextPhrase () {
        // console.log("inside nextPhrase popUpOpen is . . .")
        // console.log(popUpOpen)
        if (stringStable && popUpOpen) {
            let newString = phrases[0];
            for (let i = 0; i < phrases.length; i++) {
                if (currentString === phrases[i]) {
                    newString = phrases[(i + 1) % phrases.length]
                }
            }
            // console.log("setting target to: " + newString);
            setTargetString(newString);
            setStringStable(false);
        }
    }

    useEffect(() => {
        if (!isDelayNeeded && stringStable && popUpOpen) {
            nextPhrase()
        } else {
            SetIsDelayNeeded(true);
        }
    }, [isDelayNeeded])

    // useEffect(() => {
    //     console.log("anytime popUpOpen changes ... : " + popUpOpen);
    // }, [popUpOpen])

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
                <EmailPopup closePopUps={closePopUps} />
                : null}
                
            </div>

        </>
    );
};