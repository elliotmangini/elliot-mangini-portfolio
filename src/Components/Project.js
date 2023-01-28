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
          } else if (event.key === 'Enter') {
                goToCaseStudy();
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

    return (
        <>
            { go === p.route ?
                <Navigate to={`/${p.route}`} />
            : null}

            {/* List of Projects */}
            {!hasEverSelected ?
            <div>
                <div className={`${style.big_titles_container} ${selectedProject ? style.make_unclickable : null}`}>
                    {/* LOAD ALL SAME */}
                    {selectedProject === "" ?
                    <h1 onClick={() => bringUpDetails()} className={`${style.project_title_basic} ${style.project_title}`}><span>{p.chapter}</span> {p.title}</h1> : null }

                    {/* Project w/ matching title swings slowly, others swing quickly. */}
                    { isClicked && !isLeaving ?
                    <h1 className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : `${style.project_title} ${style.delay4} ${style.final_swing}` )}><span>{p.chapter}</span> {p.title}</h1> : null }
                </div>
            </div>
            : null }


            {/* Project Details */}
            { isClicked && (p.title === selectedProject) ?
            <>
            { !isLeaving ?
            // show the project's quick breakdown
            <>
                
                {/* forward and backward arrows */}
                <div className={`${style.cycle_buttons_container}`}>
                    <div className={`${style.cycle_button_animation_container} ${!hasEverSelected ? style.cycle_buttons_enter : null }`}>
                        <div onClick={() => switchProject(-1)} className={`${style.cycle_button} ${style.cycle_previous}`}>
                            <img className={style.cycle_icon} src={arrowIcon}></img>
                        </div>
                        <div onClick={() => switchProject(1)} className={`${style.cycle_button} ${style.cycle_next}`}>
                            <img className={style.cycle_icon} src={arrowIcon}></img>
                        </div>
                    </div>
                </div>

                <div className={style.project_text_container}>
                    <div className={`${style.project_details}`}>
                        <h1 className={`${style.project_name} ${style.slide_in_quick} ${style.off_left}`}>{p.title}</h1>
                        <h2 className={`${style.tagline} ${style.slide_in} ${style.off_left}`}>{p.tagline} . . .&nbsp;&nbsp;</h2>
                        <div id={`${style.thin_tagline_line}`}></div>
                        <p className={`${style.fade_in_2} ${style.project_description}`}>{p.body}<br/><br/></p>
                        <br />
                        <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>
                            <ul>
                                {languages}&nbsp;<span>:</span>: {p.timeframe}
                            </ul>
                        </h2>
                        <>
                        {/* Large mask Title */}
                            <div className={style.delay_fade}>
                                <div className={style.stay_on_bottom}>
                                    <div>
                                        <video src={ink} loop autoPlay muted className={style.ink}></video>
                                    </div>
                                    <h1 onClick={() => goToCaseStudy()} className={`${style.project_title_basic} ${style.selected_project}`}>Watch Walkthrough</h1>

                                    {/* <div className={`${style.arrows_container} ${style.short_delay_fade}`}>
                                        <img className={style.arrow_one} src={arrow}></img>
                                    </div> */}
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </> 
            :
            // isLeaving is true, details and site title fade away
            <>
            {/* forward and backward arrows */}
                <div className={`${style.cycle_buttons_container}`}>
                    <div className={`${style.cycle_button_animation_container} ${style.fade_out_2}`}>
                        <div className={`${style.cycle_button} ${style.cycle_previous}`}>
                            <img className={style.cycle_icon} src={arrowIcon}></img>
                        </div>
                        <div className={`${style.cycle_button} ${style.cycle_next}`}>
                            <img className={style.cycle_icon} src={arrowIcon}></img>
                        </div>
                    </div>
                </div>

                <div  className={`${style.project_text_container} ${style.fade_out_3}`}>
                    <div className={`${style.project_details}`}>
                        <h1 className={`${style.project_name} ${style.slide_in_quick} ${style.off_left}`}>{p.title}</h1>
                        <h2 className={`${style.tagline}`}>{p.tagline} . . .&nbsp;&nbsp;</h2>
                        <div id={`${style.thin_tagline_stabilized}`}></div>
                        <p className={`${style.fade_in_2} ${style.project_description}`}>{p.body}</p>
                        <br />
                        <h2 className={`${style.timeframe} ${style.slide_in} ${style.off_right}`}>
                            <ul>
                                {languages}&nbsp;<span>:</span>: {p.timeframe}
                            </ul>
                        </h2>
                        <>
                        {/* Large mask Title */}
                            <div className={``}>
                                <div className={style.stay_on_bottom}>
                                    <div>
                                        <video src={ink} loop autoPlay muted className={style.ink}></video>
                                    </div>
                                    <h1 className={`${style.project_title_basic} ${style.selected_project}`}>Video Walkthrough</h1>

                                    {/* <div className={`${style.arrows_container} ${style.long_delay_fade}`}>
                                        <img className={style.arrow_one} src={arrow}></img>
                                    </div> */}
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </>
            }
            </>


            : null }
            
        </>
    )
}