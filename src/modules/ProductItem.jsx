import React from "react";

const ProductItem = ({ product }) => {
  return (
    <li className="products__item">
      <article className="product">
        <img className="product__img" src={product.img} alt={product.name} />
        <div className="product__content">
          <h3 className="product__title">{product.name}</h3>
          <p className="product__price">{product.price} ₽</p>
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
