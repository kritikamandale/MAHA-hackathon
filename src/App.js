import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const paintings = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (painting) => {
    const exist = cartItems.find((x) => x.id === painting.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === painting.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...painting, quantity: 1 }]);
    }
  };

  const onRemove = (painting) => {
    const exist = cartItems.find((x) => x.id === painting.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== painting.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === painting.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = " Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <u><i><h1 className="heading"> Order Wall paintings </h1></i></u>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {paintings.map((painting) => {
          return (
            <Card painting={painting} key={painting.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
