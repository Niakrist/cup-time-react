import React, { useState } from "react";
import { API_URL } from "../const";
import ProductModal from "./ProductModal";

const ProductItem = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("++++", modalIsOpen);
    setModalIsOpen(false);
  };

  return (
    <li className="products__item">
      <a
        className="product__link"
        href="#"
        onClick={openModal}
        aria-label={`Открыть модальное окно для ${product.title}`}
      >
        <article className="product">
          <img
            className="product__img"
            src={API_URL + product.img}
            alt={product.title}
          />
          <div className="product__content">
            <h3 className="product__title">{product.title}</h3>
            <p className="product__price">{product.price} ₽</p>
          </div>
        </article>
      </a>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        product={product}
      />
    </li>
  );
};

export default ProductItem;
