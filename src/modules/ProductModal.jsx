import ReactModal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

ReactModal.setAppElement("#root");

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  if (!product) return;

  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onRequestClose();
    setQuantity(1);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product modal"
    >
      <div className="modal">
        <img
          className="modal__img"
          src={API_URL + product.img}
          alt={product.title}
        />
        <div className="modal__content">
          <h2 className="modal__title">{product.title}</h2>
          <p className="modal__price">{product.price} ₽</p>
          <ul className="modal__list">
            {Object.keys(product.additional).map((item) => (
              <li className="modal__item" key={item}>
                <span>{item}: </span>
                {product.additional[item]}
              </li>
            ))}
          </ul>

          <div className="modal__add">
            <div className="cart-item__quantity cart-item__quantity_modal">
              <button
                className="cart-item__quantity-button cart-item__quantity-button_minus"
                onClick={handleDecrement}
              ></button>
              <input
                className="cart-item__quantity-input"
                type="number"
                value={quantity}
                readOnly
              />
              <button
                className="cart-item__quantity-button cart-item__quantity-button_plus"
                onClick={handleIncrement}
              ></button>
            </div>
            <button className="modal__add-btn" onClick={handleAddToCart}>
              Добавить
            </button>
          </div>
        </div>
        <button className="modal__btn" onClick={onRequestClose}></button>
      </div>
    </ReactModal>
  );
};

export default ProductModal;
