import "./OrderBucket.css";
const OrderBucket = (props) => {
  if (Object.keys(props.orderedPizza).length === 0) {
    return (
      <div className="order-bucket">
        <img src="/assets/images/bucket.png" alt="bucket image" />
        <h1>Bucket is Empty</h1>
      </div>
    );
  }
  return (
    <div className="order-bucket">
      <h1 className="title">Your order:</h1>
      {Object.keys(props.orderedPizza).map((pizza) => {
        return (
          <div key={pizza} className="pizza-item">
            <p className="pizza-name">{pizza}</p>
            <div className="pizza-amount">
              <button
                onClick={() =>
                  props.increasePizzaAmount(
                    pizza,
                    props.orderedPizza[pizza].price
                  )
                }
                className="amount-btn"
              >
                +
              </button>
              <p className="amount-value">{props.orderedPizza[pizza].amount}</p>
              <button
                onClick={() =>
                  props.decreasePizzaAmount(
                    pizza,
                    props.orderedPizza[pizza].price
                  )
                }
                className="amount-btn"
              >
                -
              </button>
            </div>
            <button
              onClick={() => props.removePizzaOrder(pizza)}
              className="delete-btn"
            >
              X
            </button>
          </div>
        );
      })}
      <div className="total">
        <p className="total-label">Total:</p>
        <p className="total-value">$ 0</p>
      </div>
      <button onClick={() => props.openModal()} className="place-order-btn">
        Place Order
      </button>
    </div>
  );
};

export default OrderBucket;
