import React from 'react';
//components
import SkeletonProduct from './SkeletonProduct';
import Loader from './Loader';
//style
import styles from "./SkeletonStore.module.css"

const ids =[{id:1}, {id:2}, {id:3}, {id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12} ]

const SkeletonStore = () => {
    return (
        <>
            <Loader/>
            <div className={styles.container}>
                {
                    ids.map( event => <SkeletonProduct key={event.id}/>)
                }  
            </div>
        </>
    );
};

export default SkeletonStore;