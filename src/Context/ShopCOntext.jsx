import React from "react";
import { useState } from "react";
import { createContext } from "react";
import products from "../data";
export const ShopContext = createContext(null);
const getDefault = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopCOntext = (props) => {
  const [items, setItems] = useState(getDefault());

  const add = (id) => {
    setItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const remove = (id) => {
    setItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const update = (id, changeAmount) => {
    setItems((prev) => ({ ...prev, [id]: changeAmount }));
  };

  const close = (id) => {
    setItems((prev) => ({ ...prev, [id]: 0 }));
  };
  const total = () => {
    let totalAmount = 0;
    for (const i in items) {
      if (items[i] > 0) {
        let info = products.find((product) => product.id === Number(i));
        totalAmount += items[i] * info.price;
        console.log(totalAmount);
      }
    }
    return totalAmount;
  };

  const data = { items, add, remove, update, total, close };
  console.log(items);

  return (
    <ShopContext.Provider value={data}>{props.children}</ShopContext.Provider>
  );
};

export default ShopCOntext;
