import { useOrder } from "../context/OrderContet";

const Delivery = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    updateOrderDetails(name, value);
  };

  return (
    <section className="delivery">
      <div className="container">
        <h2 className="delivery__title">Доставка</h2>
        <form className="delivery__form">
          <input
            className="delivery__input"
            type="text"
            name="name"
            placeholder="Имя"
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className="delivery__input"
            type="text"
            name="phone"
            placeholder="Телефон"
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className="delivery__input delivery__input_address"
            type="text"
            name="address"
            placeholder="Адрес"
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className="delivery__payment">
            <h3 className="delivery__payment-title">Оплата:</h3>
            <label className="delivery__payment-label">
              <input
                className="delivery__radio"
                type="radio"
                name="payment"
                value="cash"
                checked={orderDetails.payment === "cash"}
                onChange={handleChange}
              />
              Картой
            </label>
            <label className="delivery__payment-label">
              <input
                className="delivery__radio"
                type="radio"
                name="payment"
                value="card"
                checked={orderDetails.payment === "card"}
                onChange={handleChange}
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Delivery;
