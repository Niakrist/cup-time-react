import React from "react";
import { products } from "../products";
import ProductItem from "./ProductItem";

const ProductsList = ({ title = "Чай" }) => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{title}</h2>
        <ul className="products__list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
