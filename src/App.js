import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Shared/Navbar";
import ShopCart from "./components/ShopCart";
import CarouselDetails from "./components/CarouselDetails";
import Login from "./components/validation/Login";
import SignUp from "./components/validation/SignUp";
import Footer from "./components/Shared/Footer";
import AboutMe from "./components/AboutMe";
import IconAbout from "./components/Shared/IconAbout";
import SkeletonProduct from "./components/Shared/SkeletonProduct";

//Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import InputContextProvider from "./context/InputContextProvider";
import CarouselContextProvider from "./context/CarouselContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <InputContextProvider>
          <CarouselContextProvider>
            <Navbar />
            <Switch>
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route
                path="/carousel/:id"
                component={CarouselDetails}
              />
              <Route path="/products/Cart" component={ShopCart} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/cart" component={ShopCart} />
              <Route path="/products" component={Store} />
              <Route path="/SkeletonProduct" component={SkeletonProduct} />
              <Redirect to="/products" />
            </Switch>
            <IconAbout />
            <Footer />
          </CarouselContextProvider>
        </InputContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;