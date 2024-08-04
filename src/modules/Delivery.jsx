const Delivery = () => {
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
          />
          <input
            className="delivery__input"
            type="text"
            name="phone"
            placeholder="Телефон"
          />
          <input
            className="delivery__input delivery__input_address"
            type="text"
            name="address"
            placeholder="Адрес"
          />

          <fieldset className="delivery__payment">
            <h3 className="delivery__payment-title">Оплата:</h3>
            <label className="delivery__payment-label">
              <input
                className="delivery__radio"
                type="radio"
                name="payment"
                value="cach"
              />
              Картой
            </label>
            <label className="delivery__payment-label">
              <input
                className="delivery__radio"
                type="radio"
                name="payment"
                value="card"
                defaultChecked
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
