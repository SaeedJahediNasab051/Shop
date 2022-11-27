import React from 'react';


//Styles
import styles from "./Loader.module.css"


const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ring}></div>
            <span className={styles.ringSpan}>Loding...</span>
        </div>
    );
};

export default Loader;