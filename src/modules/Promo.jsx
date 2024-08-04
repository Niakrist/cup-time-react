import { Link, useSearchParams } from "react-router-dom";

const Promo = () => {
  const [searchParams] = useSearchParams();

  const currentCategory = searchParams.get("category");

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__container">
          <h1 className="promo__title">Попробуй новый вкус Арабики</h1>
          {currentCategory != "coffee" && (
            <Link className="promo__link" to="/products?category=coffee">
              Перейти к кофе
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Promo;
