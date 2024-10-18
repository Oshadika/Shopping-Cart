import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopCOntext";

const CartItem = ({ data }) => {
  const { id, name, price, image, details } = data;
  const { items, add, remove, update, total, close } = useContext(ShopContext);
  const quantity = items[id];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-md-7 m-2">
          <div className="d-flex">
            <div className="p-2 image_card">
              <img src={image} alt="" />
            </div>
            <div className="item-details p-2">
              <span>
                <b>{name}</b>
              </span>
              <p>{price}</p>

              <div className="handle d-flex">
                <button
                  className="btn btn-secondary"
                  onClick={() => remove(id)}
                >
                  -
                </button>
                <input
                  type="number"
                  name=""
                  id=""
                  className=" form-control border border-3 border-dark"
                  value={quantity}
                  onChange={(e) => update(id, Number(e.target.value))}
                />
                <button className="btn btn-secondary" onClick={() => add(id)}>
                  +
                </button>
              </div>
            </div>
            <div className="p-2 ">
              <button
                className="btn btn-close"
                onClick={() => close(id)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
