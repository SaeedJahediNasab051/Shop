import React from 'react';

//Styles
import styles from "./Skills.module.css"

//Component
import ProgressBar from './ProgressBar';

const Skills = () => {
    return (
        <section className={styles.skills}>
                <h2> مهارت ها </h2>
                <div className={styles.itemsSkills}>
                    <div className={styles.itemSkills}>
                        <h3>Html5 & Css3</h3>
                        <ProgressBar  bgcolor="#1abc9c" progress="90" height={30} />

                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Javascript ES6</h3>
                        <ProgressBar  bgcolor="#1abc9c" progress="85" height={30} />

                    </div>
                    <div className={styles.itemSkills}>
                        <h3>ReactJs</h3>
                        <ProgressBar  bgcolor="#e67e22" progress="65" height={30} />
                        
                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Css/Sass</h3>
                        <ProgressBar  bgcolor="#3498db" progress="70" height={30} />
                        
                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Git & GitHub</h3>
                        <ProgressBar  bgcolor="#e67e22" progress="50" height={30} />
                        
                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Mobile First</h3>
                        <ProgressBar  bgcolor="#3498db" progress="75" height={30} />

                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Responsive Css</h3>
                        <ProgressBar  bgcolor="#3498db" progress="75" height={30}  />

                    </div>
                    <div className={styles.itemSkills}>
                        <h3>Redux</h3>
                        <ProgressBar  bgcolor="#e74c3c" progress="30" height={30} />
                    </div>
                    <div className={styles.itemSkills}>
                        <h3>English language</h3>
                        <ProgressBar  bgcolor="#e67e22" progress="50" height={30} />
                    </div>
                    

                </div>

            </section>
    );
};

export default Skills;