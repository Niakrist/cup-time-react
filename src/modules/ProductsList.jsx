import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useProducts } from "../context/ProdutContext";
import { useSearchParams } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";

const ProductsList = () => {
  const { products, setCategory, categories } = useProducts();

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{categories[category] || "Товары"}</h2>
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
