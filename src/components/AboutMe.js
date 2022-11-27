import React from "react";

//Component
import WebAuthor from "./Shared/WebAuthor";
import MyStory from "./Shared/MyStory";
import Skills from "./Shared/Skills";
import Communications from "./Shared/Communications";

//Styles
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    
  return (
    <div className={styles.container}>
        <WebAuthor />
        <MyStory />
        <Skills />
        <Communications/>
    </div>
  );
};

export default AboutMe;
