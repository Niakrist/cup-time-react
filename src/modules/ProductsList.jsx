import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ title = "Чай" }) => {
  const products = [
    { id: 1, img: "/img/photo-1.jpg", name: "Кокосовая матча", price: 390 },
    {
      id: 2,
      img: "/img/photo-2.jpg",
      name: "Зеленый индонезийскийчай",
      price: 340,
    },
    {
      id: 3,
      img: "/img/photo-3.jpg",
      name: "Черный чай из Эфиопии",
      price: 380,
    },
    {
      id: 4,
      img: "/img/photo-4.jpg",
      name: "Черный чай из Калифорнии",
      price: 360,
    },
    {
      id: 5,
      img: "/img/photo-5.jpg",
      name: "Органическая веганская матча",
      price: 400,
    },
    {
      id: 6,
      img: "/img/photo-6.jpg",
      name: "Чай черный Лакандона",
      price: 390,
    },
  ];

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
