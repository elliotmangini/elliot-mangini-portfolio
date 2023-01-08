import style from '../StyleSheets/Curtains.module.css';



export default function StageBack ({animation}) {

    return (
        <div className={`${style.background} ${animation === "coming" ? style.fade_in : null}`}></div>
    )
}