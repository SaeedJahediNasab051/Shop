import React from 'react';
import ContentLoader from "react-content-loader"
//Style
import styles from "./SkeletonProduct.module.css"

const SkeletonProduct = (props) => (
        <div className={styles.container}>
        <ContentLoader 
            speed={2}
            width={250}
            height={360}
            viewBox="0 0 250 360"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="6" y="269" rx="2" ry="2" width="100" height="25" /> 
            <rect x="6" y="231" rx="2" ry="2" width="130" height="25" /> 
            <rect x="6" y="6" rx="2" ry="2" width="230" height="200" /> 
            <rect x="126" y="326" rx="2" ry="2" width="120" height="30" /> 
            <rect x="6" y="327" rx="2" ry="2" width="80" height="30" />
        </ContentLoader>
  </div>
    
);

export default SkeletonProduct;