import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useProducts } from "../context/ProdutContext";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { products, setCategory } = useProducts();

  const titles = {
    tea: "Чай",
    coffee: "Кофе",
    teapots: "Чайники",
    cezves: "Турки",
    other: "Другое",
  };

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  console.log("category: ", category);

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  if (products) {
    return (
      <section className="products">
        <div className="container">
          <h2 className="products__title">{titles[category]}</h2>
          <ul className="products__list">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return <div>Загрузка</div>;
};

export default ProductsList;
