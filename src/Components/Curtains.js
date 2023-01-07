import style from '../StyleSheets/Curtains.module.css';
import curtain from '../Assets/curtain.png';



export default function Curtains ({animation}) {
    return (
        <div className={style.curtains_container}>
            <img className={`${style.curtain_left} ${style.curtain}`} src={curtain}></img>
            <img className={`${style.curtain_right} ${style.curtain}`} src={curtain}></img>
        </div>
    )
}