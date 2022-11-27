import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from "./IconAbout.module.css"
//Icons
import icon from '../../assets/icons/gui_about.svg'


const IconAbout = () => {
    const [showing, setShowing] = useState("");
    const clickHandler = ()=>{
        setShowing(true)
    }
    const moseOut =()=>{
        setShowing(false)
    }
    return (
        <>
            <Link to="/products/aboutMe" onMouseMove={clickHandler} onMouseOut={moseOut} className={styles.bell}>
                    <img src={icon} alt="bell" />
            </Link>
            <div  className={styles.bellTex} style={{opacity:(showing ? 1 : 0 )}} >
                <div  className={styles.bellBeak}></div>
                <p>درباره من</p>
            </div>
        </>
    );
};

export default IconAbout;    