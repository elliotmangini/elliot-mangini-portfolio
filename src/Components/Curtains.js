import style from '../StyleSheets/Curtains.module.css';
import curtain from '../Assets/extendedCurtain.png';



export default function Curtains ({effect}) {
    return (
        <>
            <div className={style.curtains_container}>
                <img className={`${style.curtain_left} ${style.curtain} ${effect === "swoosh" ? style.swoosh_left : null} ${effect === "coming" ? style.left_enter : null}`} src={curtain}></img>
                <img className={`${style.curtain_right} ${style.curtain} ${effect === "swoosh" ? style.swoosh_right : null} ${effect === "coming" ? style.right_enter : null}`} src={curtain}></img>
            </div>
        </>
    )
}