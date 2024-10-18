import React from "react";
import products from "../../data";
import Product from "./Product";
const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-12">
            <h1 className="text-center">Shops</h1>
          </div>
        </div>

        <div className="row">
          {products.map((product, index) => {
            return <Product key={index} data={product}></Product>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
