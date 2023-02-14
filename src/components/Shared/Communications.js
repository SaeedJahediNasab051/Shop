import React, { useState } from 'react';

//styles
import styles from "./Communications.module.css"

//icons
import email from "../../assets/icons/Email.svg"
import whatsapp from "../../assets/icons/whatsapp2.png"
import telegram from "../../assets/icons/telegram2.png"
import instagram from "../../assets/icons/instagram2.png"
import linkdin from "../../assets/icons/linkedin2.png"
import phone from "../../assets/icons/phone.png"

const Communications = () => {
    
    const [showing, setShowing] = useState("true");
    const clickHandler = ()=>{
        setShowing(showing === "false" ? "true" : "false")
    }

    return (
        <div className={styles.container}>
                <div className={styles.communications}>
                    <div className={styles.communicationsTitle}>
                        <p>دنبال یه نیروی کار با انگیزه و پشتکار بالا هستید؟</p>
                        <p> پس همین الان با من تماس بگیرید.</p>
                    </div>
                    <ul className={styles.ulCommunications}>
                        <li onClick={clickHandler}><span style={{ display: (showing === "true" ? 'none' : 'block') }}>09384929196</span><img src={phone} alt="phone" /> </li>
                        <li><a href="https://saeedjahedinasab@gmail.com"><img src={email} alt="email" /></a> </li>
                        <li><a href="https://t.me/SaeedJDN"><img src={telegram} alt="telegram" /></a></li>
                        <li><a href="https://wa.link/qh800f"><img src={whatsapp} alt="Whatsapp" /></a></li>
                        <li><a href="https://www.linkedin.com/in/saeed-jahadi-1184b6242"><img src={linkdin} alt="linkding" /></a> </li>
                        <li><a href="https://www.instagram.com/mr_jahedii/"><img src={instagram} alt="instagram" /></a> </li>
                    </ul>
                </div>
            </div>
    );
};

export default Communications;