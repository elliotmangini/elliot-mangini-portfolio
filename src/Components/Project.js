import style from '../StyleSheets/Elliot.module.css';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import ink from '../Assets/Pink_ink_water.mp4';
import arrow from '../Assets/arrow-gif.gif';
import arrowIcon from '../Assets/arrow.png';


export default function ElliotProject ({ setIsInternalRoute, hasEverSelected, setHasEverSelected, projectsData, go, setGo, isLeaving, setIsLeaving, p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {

    function bringUpDetails () {
        if (selectedProject !== "") {
            setHasEverSelected(true);
        }
        setIsClicked(true);
        setSelectedProject(p.title);
    }

    let timeoutId;
    function goToCaseStudy() {
        if (selectedProject === p.title) {
            setIsLeaving(true);
            timeoutId = setTimeout(() => {
                setIsInternalRoute(true);
                setGo(p.route)
            }, 6000);
        }
    }


    // "back" button function
    function deselect () {
        setHasEverSelected(false);
        setIsLeaving(false);
        setIsClicked(false);
        setSelectedProject("");
        clearTimeout(timeoutId);
    }

    const languages = p.languages.map((l) =>{
        return (
            <li key={uuid()} className={style.language_p}>{l}</li>
        )
    })

    function switchProject (increment) {
        if (selectedProject === p.title) {
            setHasEverSelected(true);
            setSelectedProject(projectsData[(((p.index + increment) + projectsData.length) % projectsData.length)].title);
        }
    }

    useEffect(() => {
        // console.log(selectedProject);
        function handleKeyDown(event) {
          if (event.key === 'ArrowLeft' && selectedProject) {
            switchProject(-1);
          } else if (event.key === 'ArrowRight' && selectedProject) {
            switchProject(1);
        //   } else if (event.key === 'Enter' && document.activeElement === document.body) {
        //         goToCaseStudy();
          } else if (event.key === 'Escape' && !isLeaving) {
            // Would be better if escape key interupted the routing sequence, but this is good for now.
            deselect();
          }
        }
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function HandleKeyDown(event) {
        if (event.key === "Enter") {
          event.target.click();
        }
    }

    return (
        <>
            { go === p.route ?
                <Navigate to={`/${p.route}`} />
            : null}

            {/* List of Projects */}
            {!hasEverSelected ?
            <>
                <div className={`${style.big_titles_container} ${selectedProject ? style.make_unclickable : null}`}>
                    {/* LOAD ALL SAME */}
                    {selectedProject === "" ?
                    <h1 onKeyDown={HandleKeyDown} onClick={() => bringUpDetails()} tabIndex="0" className={`${style.project_title_basic} ${style.project_title}`}><span>{p.chapter}</span> {p.title}</h1> : null }

                    {/* Project w/ matching title swings slowly, others swing quickly. */}
                    { isClicked && !isLeaving ?
                    <h1 className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : `${style.project_title} ${style.delay4} ${style.final_swing}` )}><span>{p.chapter}</span> {p.title}</h1> : null }
                </div>
            </>
            : null }


            {/* Project Details */}
            { isClicked && (p.title === selectedProject) ?
            <>
                {/* Need to account for the isLeaving state with animations off screen */}
                {/* forward and backward arrows */}
                <div className={isLeaving ? style.disappear : null}>
                    <div className={`${style.cycle_buttons_container}`}>
                        <div className={`${style.cycle_button_animation_container} ${!hasEverSelected ? style.cycle_buttons_enter : null }`}>
                            <div tabIndex="0" onKeyDown={HandleKeyDown} onClick={() => switchProject(-1)} className={`${style.cycle_button} ${style.cycle_previous}`}>
                                <img alt="arrow icon left" className={style.cycle_icon} src={arrowIcon}></img>
                            </div>
                            <div tabIndex="0" onKeyDown={HandleKeyDown} onClick={() => switchProject(1)} className={`${style.cycle_button} ${style.cycle_next}`}>
                                <img alt="arrow icon right" className={style.cycle_icon} src={arrowIcon}></img>
                            </div>
                        </div>
                    </div>

                    <div className={style.project_text_container}>
                        <div className={`${style.project_details}`}>
                            <h1 className={`${style.project_name} ${style.slide_in_quick} ${style.off_left}`}>{p.title}</h1>
                            <div className={style.tagline_group}>
                                <h2 className={`${style.tagline} ${style.slide_in} ${style.off_left}`}>{p.tagline} . . .&nbsp;&nbsp;</h2>
                                {/* <div className={`${style.slide_in} ${style.esc_key}`} onClick={() => deselect()}>esc</div> */}
                            </div>
                            <div id={`${style.thin_tagline_line}`}></div>
                            <p className={`${style.fade_in_2} ${style.project_description}`}>{p.body}<br/><br/></p>
                            <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>
                                <ul>
                                    {languages}&nbsp;::&nbsp;{p.timeframe}
                                </ul>
                            </h2>
                            <>
                            {/* Large mask Title */}
                                <div className={style.delay_fade}>
                                    <div className={style.stay_on_bottom}>
                                        <div>
                                            <video src={ink} loop autoPlay playsInline muted controls={false} className={style.ink}></video>
                                        </div>
                                        <h1 className={`${style.project_title_basic} ${style.selected_project}`}><a tabIndex="0" onKeyDown={HandleKeyDown} onClick={() => goToCaseStudy()} >Watch<br/>Walkthrough</a></h1>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </> 
            : null }
            
        </>
    )
}