import React from 'react';

//Images
import picMe from "../../assets/images/MyPicture.png"

//Styles
import styles from "../Shared/WebAuthor.module.css";


const WebAuthor = () => {
    return (
        <section className={styles.webAuthor}>
            <figure className={styles.imageMe}>
                <img src={picMe} alt="Pic" />
            </figure>

            <div className={styles.containerName}>
                <div className={styles.name}>
                    <p>سلام</p>
                    <h1>سعید جاهدی نسب هستم</h1>
                    <h2>Front-End Developer</h2> 
                </div>
            </div>
        </section>
    );
};

export default WebAuthor;