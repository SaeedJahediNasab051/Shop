import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import debounce from "lodash.debounce";

//Components
import Burger from './Burger';

//context
import { CartContext } from '../../context/CartContextProvider';
import { InputContext } from '../../context/InputContextProvider'


//Icons
import shopIcon from "../../assets/icons/shop.svg"
import storeIcon from "../../assets/icons/store-solid.svg"
import magnifying from "../../assets/icons/magnifying-glass-solid.svg"
import bracket from "../../assets/icons/right-to-bracket-solid.svg"

//Style
import styles from "./Navbar.module.css"

const Navbar = () => {
    
    const {state} = useContext(CartContext)
    const {setSearch} = useContext(InputContext)
    
    const searchHandler = event => {
        setSearch(event.target.value);
    }
    const debouncedChangeHandler = useCallback(debounce(searchHandler, 1000), []);
    
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.flex}>
                <Burger  />
                <div className={styles.container}>
                    <span><input type="text"  onChange={debouncedChangeHandler} placeholder="Search in the store..." /><img src={magnifying} alt="magnifying" /></span>
                    <div className={styles.iconContainer}>
                        <Link to="./Cart"><img src={shopIcon} alt="Shop" /></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                    <Link className={styles.productLink} to="/products" ><img src={storeIcon} alt="Store Icon" /></Link>
                </div>
                <div className={styles.logins}>
                    <div className={styles.login}>                     
                        <Link to="/products/signup">Sign Up</Link>
                        <p>|</p>
                        <Link to="/products/login" >Login<img src={bracket} alt="bracket" /></Link> 
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;