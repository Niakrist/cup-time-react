import { useState } from "react";
import { API_URL } from "../const";
import { useCart } from "../context/CartContext";

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const [itemQuantity, setItemQuantity] = useState(product.quantity);

  const handleDecrement = () => {
    if (itemQuantity > 0) {
      const newItemQuantity = itemQuantity - 1;
      setItemQuantity(newItemQuantity);
      updateQuantity(product.id, itemQuantity);
    } else {
      removeFromCart(product.id);
    }
  };
  const handleIncrement = () => {
    const newItemQuantity = itemQuantity + 1;
    setItemQuantity(newItemQuantity);
    updateQuantity(product.id, itemQuantity);
  };
  return (
    <li className="cart-item">
      <img
        className="cart-item__img"
        src={API_URL + product.img}
        alt={product.title}
      />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{product.title}</h3>
        <div className="cart-item__quantity">
          <button
            onClick={handleDecrement}
            className="cart-item__quantity-button cart-item__quantity-button_minus"
          >
            -
          </button>
          <input
            className="cart-item__quantity-input"
            type="number"
            readOnly
            value={itemQuantity}
          />
          <button
            onClick={handleIncrement}
            className="cart-item__quantity-button cart-item__quantity-button_plus"
          >
            +
          </button>
        </div>
        <p className="cart-item__price">
          {product.price * product.quantity}&nbsp;₽
        </p>
      </div>
    </li>
  );
};

export default CartItem;
