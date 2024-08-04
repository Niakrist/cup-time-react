import { useCart } from "../context/CartContext";
import { products } from "../products";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();

  if (cart) {
    const totalPrice = cart.reduce(
      (accum, elem) => elem.price * elem.quantity + accum,
      0
    );

    console.log(totalPrice);
    console.log("cart: ", cart);
    return (
      <section className="cart">
        <div className="container cart__container">
          <h2 className="cart__title">Корзина ({cart?.length})</h2>
          <ul className="cart__list">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="cart__summary">
            <h3 className="cart__summary-title">Итого:</h3>
            <p className="cart__total">{totalPrice}&nbsp;₽</p>
            <button className="cart__order-button">Заказать</button>
          </div>
        </div>
      </section>
    );
  }
  return <h1>Загрузка</h1>;
};

export default Cart;
