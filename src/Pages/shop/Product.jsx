import React, { useContext } from "react";
import ShopCOntext, { ShopContext } from "../../Context/ShopCOntext";

const Product = ({ data }) => {
  const { add, items } = useContext(ShopContext);
  const { id, name, price, image, details } = data;
  const itemquantity = items[id];
  console.log(itemquantity);
  return (
    <div className="col-md-4 col-sm-6 mb-5">
      <div className="card" style={{ height: 500 }}>
        <div className="card-header ">
          <img src={image} alt="" srcset="" />
        </div>

        <div className="card-body">
          <h5>{name}</h5>
          <p className="text-center">{details}</p>
          <div className="d-flex ">
            <p>Price:</p>
            <span className="fw-bold">{price}</span>
          </div>

          <div>
            <button className="btn btn-dark btn-sm" onClick={() => add(id)}>
              Add to Cart {itemquantity > 0 && <span>{itemquantity}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
