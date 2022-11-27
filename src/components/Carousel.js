import React, {useContext} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

//Context
import { CaroselContext } from '../context/CarouselContextProvider';

//Styles
import styles from "./Carousel.module.css"



const Carousel = () => {

    const imagesData = useContext(CaroselContext)
    

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
       
    };
    
    

    return (
        
        <div className={styles.container}> 
            <Slider {...settings} className={styles.slickSlide}>
                {imagesData.map((item) => (
                    <div key={item.id}>
                        <Link to={`/products/carousel/${item.id}`} ><img  src={item.image}  alt={item.alt} /></Link> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;