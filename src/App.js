import Home from "./views/home/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Footer, Header } from "components/index";
import Menu from "views/menu/Menu";
import { menuDishes } from "data/pizza";
import Cart from "views/cart/Cart";
import React, { useState } from "react";
import CartProvider from "store/cartProvider";
import Contactus from "views/contactUs/Contactus";

function App() {
  const [iscart, setIscart] = useState(false);
  const onCart = () => {
    setIscart((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className='App'>
      <CartProvider>
        <Header onCart={onCart} />
        {iscart && <Cart onCart={onCart} />}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/menu'
            render={(props) => <Menu {...props} menuDishes={menuDishes} />}
          />
          <Route path='/contact' render={() => <Contactus />} />
        </Switch>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
