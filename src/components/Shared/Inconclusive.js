import React from 'react';

//image
import inconclusive from "../../assets/images/inconclusive.jfif"

//Styles
import styles from "./Inconclusive.module.css"


const Inconclusive = (props) => {

    
    return (
        <div className={styles.container}>
            <img src={inconclusive} alt="inconclusiv" />
            <div className={styles.title}>
                <p>No results for {props.search}.</p>
                <p>Try checking your spelling or use more general terms.</p>
            </div>
            
        </div>
    );
};

export default Inconclusive;