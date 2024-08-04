import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useProducts } from "../context/ProdutContext";
import { useSearchParams } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";

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

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{titles[category]}</h2>
        <ul className="products__list">
          {products.length ? (
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
