import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContet";
import CartItem from "./CartItem";
import { API_URL } from "../const";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
    };

    try {
      const response = await fetch(API_URL + "/api/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Возникла ошибка при отправлении данных");
      }

      const result = await response.json();
      setOrderStatus("success");
      setOrderId(result.order.id);
      clearOrderDetails();
      clearCart();
    } catch (error) {
      setOrderStatus("error");
      console.error(`Ошибка: ${error} `);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (cart) {
    const totalPrice = cart.reduce(
      (accum, elem) => elem.price * elem.quantity + accum,
      0
    );

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
            <button onClick={handleSubmit} className="cart__order-button">
              Заказать
            </button>
          </div>
        </div>
        <ReactModal
          onRequestClose={closeModal}
          isOpen={modalIsOpen}
          className="modal-cart"
          overlayClassName={"modal-cart_overlay"}
        >
          <h2 className="modal-cart__title">
            {orderStatus === "success"
              ? `Заказ упешно отправлен! Номер вашего заказа: ${orderId}`
              : "Ошибка при оформлении заказа"}
          </h2>
          <button onClick={closeModal} className="modal-cart__button">
            Закрыть
          </button>
        </ReactModal>
      </section>
    );
  }
  return <h1>Загрузка</h1>;
};

export default Cart;
