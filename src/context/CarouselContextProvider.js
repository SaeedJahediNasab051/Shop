import React, { useState, useEffect, createContext } from 'react';

//API
import imageData  from "../services/imagesData"

export const CaroselContext = createContext()

const CarouselContextProvider = ({children}) => {

    const [images, setImages] = useState([]);

    useEffect(() =>{

        setImages(imageData)
    }, [])
    
    return (
        <CaroselContext.Provider value={images}>
            {children}
        </CaroselContext.Provider>
    );
};

export default CarouselContextProvider;