import ReactModal from "react-modal";
import { API_URL } from "../const";

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
  if (!product) return;

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
              <li className="modal__item" key={item[0]}>
                <span>{item}: </span>
                {product.additional[item]}
              </li>
            ))}
          </ul>

          <div className="modal__add">
            <div className="cart-item__quantity cart-item__quantity_modal">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus">
                -
              </button>
              <input
                className="cart-item__quantity-input"
                type="number"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus">
                +
              </button>
            </div>
            <button className="modal__add-btn">Добавить</button>
          </div>
        </div>
        <button className="modal__btn" onClick={onRequestClose}></button>
      </div>
    </ReactModal>
  );
};

export default ProductModal;
