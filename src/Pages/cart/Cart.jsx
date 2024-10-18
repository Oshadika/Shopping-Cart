import React, { useContext } from "react";
import products from "../../data";
import { ShopContext } from "../../Context/ShopCOntext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, total } = useContext(ShopContext);
  const totalAmount = total();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="text-center p-3">Your Cart</h1>
      </div>

      <div className="items">
        {products.map((product, index) => {
          if (items[product.id] !== 0) {
            return <CartItem key={index} data={product}></CartItem>;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="text-center p-5">
          <p>
            <b>Subtotal:${totalAmount}</b>

            <div className="p-4">
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => navigate("/")}
              >
                Continue
              </button>
              <button className="btn btn-secondary btn-sm">Checkout</button>
            </div>
          </p>
        </div>
      ) : (
        <div className="text-center p-5 bg-secondary">
          <h4>Your Cart Is Empty</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
