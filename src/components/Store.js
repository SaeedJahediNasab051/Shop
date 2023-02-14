import React, { useContext } from "react";

//Components
import Product from "./Shared/Product";
import Carousel from "./Carousel";
import Inconclusive from "./Shared/Inconclusive";
import SkeletonStore from "./Shared/SkeletonStore";
//Context
import { ProductsContext } from "../context/ProductsContextProvider";
import { InputContext } from "../context/InputContextProvider";

//Styles
import styles from "./Store.module.css";


const Store = () => {
  const products = useContext(ProductsContext);
  const { search } = useContext(InputContext);

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      
      {products.length && <Carousel />}
      {products.length ? (
        searchedProducts.length === 0 ? (
          <Inconclusive search={search} />
        ) : (
          <div className={styles.container}>
            {searchedProducts.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
          </div>
        )
      ) : (
        
        <SkeletonStore/>
        
      )}
    </>
  );
};

export default Store;
