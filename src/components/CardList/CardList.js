import not from "../../helper/not";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="pizzas ">
      {props.pizzas.map((pizzaObj) => {
        return (
          <div key={pizzaObj["name"]} className="pizza-card">
            <Card
              title={pizzaObj["name"]}
              image={pizzaObj["photoName"]}
              ingridients={pizzaObj["ingredients"]}
              price={pizzaObj["price"]}
              soldOut={pizzaObj["soldOut"]}
            />
            {not(pizzaObj.soldOut) && (
              <button
                onClick={() =>
                  props.handleSetOrderedPizza(
                    pizzaObj["name"],
                    pizzaObj["price"]
                  )
                }
                className="btn pizza-btn"
              >
                Add ➕
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
