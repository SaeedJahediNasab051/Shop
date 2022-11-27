import React,{ useContext, useState, useCallback } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import debounce from "lodash.debounce";

import { Link } from 'react-router-dom';




//context
import { CartContext } from '../../context/CartContextProvider';
import { InputContext } from '../../context/InputContextProvider'



//Icons
import shopIcon from "../../assets/icons/shop.svg"
import storeIcon from "../../assets/icons/store-solid.svg"
import magnifying from "../../assets/icons/magnifying-glass-solid.svg"


//styles
import styles from "./Burger.module.css"

const Burger = () => {

    const {state} = useContext(CartContext)
    const {setSearch} = useContext(InputContext)
    const [isOpen, setOpen] = useState(false)
    const searchHandler = event =>{
        setSearch(event.target.value)
    }
    const debouncedChangeHandler = useCallback(debounce(searchHandler, 1000), []);
    
    

    return (
        <div className={styles.container}>
            <Hamburger color='#1a73e8' toggled={isOpen} toggle={setOpen} />
            <div className={styles.elements} style={{display:(isOpen ? "flex" : "none" )}} >
                    <div className={styles.iconContainer}>
                        <Link to="./Cart"><img src={shopIcon} alt="Shop" /></Link>
                        <span >{state.itemsCounter}</span>
                    </div>
                    <Link className={styles.productLink} to="/products" ><img src={storeIcon} alt="Store Icon" /></Link>
                    <span className={styles.input}><input type="text"  onChange={debouncedChangeHandler} placeholder="Search store..." /><img src={magnifying} alt="magnifying" /></span>
            </div>
        </div>
    );
};

export default Burger;