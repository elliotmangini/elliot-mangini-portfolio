import { useEffect, useState } from 'react';
import style from '../StyleSheets/Elliot.module.css'



export default function MatrixTitle ({clickDeselect, selectedProject, popUpOpen, isLeaving, targetString, setTargetString, phrases}) {
    const [currentString, setCurrentString] = useState("Software Engineer ::");
    const [ stringStable , setStringStable] = useState(true);
    const [ isDelayNeeded , setIsDelayNeeded ] = useState(true);



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
            setIsDelayNeeded(true);
        }
    }
    
    useEffect(() => {
        if ((currentString !== targetString) && (currentString !== "Looking forward to meeting you ^_^")) {
            setTimeout(() => {
                matrixString(.09);
                // console.log("action")
            }, 55)
        } else {
            setStringStable(true);
            setIsDelayNeeded(true);
        }
    }, [currentString, targetString])

    // Handle Phrase Target Setting
    useEffect(() => {
        setTimeout(() => {
            if (stringStable && popUpOpen && isDelayNeeded && !selectedProject) {
                setIsDelayNeeded(false);
            }
        }, 3500);
    }, [stringStable, popUpOpen])

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
        } else if (!isDelayNeeded && stringStable && popUpOpen && !selectedProject) {
            setIsDelayNeeded(true);
        }
    }, [isDelayNeeded])
    


    return (
        <>
            <h1 onClick={clickDeselect} className={`${style.project_title_basic} ${style.name_plate} ${style.absolute_title} ${isLeaving ? style.main_title_away : null }`}>
                Elliot Mangini
                <span>{currentString}</span>

                { selectedProject ? 
                <div className={style.esc_shaderbox}>
                    <div className={`${style.esc_key}`} onClick={clickDeselect}>esc</div>
                </div>
                : null }
            </h1>
        </>
    )
}