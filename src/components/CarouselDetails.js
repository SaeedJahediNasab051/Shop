import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CaroselContext } from '../context/CarouselContextProvider';

//Styles
import styles from "../components/CarouselDetails.module.css"

const CarouselDetails = (props) => {

    const id = props.match.params.id
    const data = useContext(CaroselContext);
    const product = data[id - 1];
    const { image, title, description, price } = product;


    return (
        
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="product" />
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <p className={styles.description}> {description} </p>
                    <div className={styles.buttonContainer}>
                        <span className={styles.price}>Price {price}$</span>
                        <Link to="/product">Back to Shop</Link>
                    </div>
                </div>
            </div>
        
    );
};

export default CarouselDetails;