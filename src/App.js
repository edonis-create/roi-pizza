import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import OrderBucket from "./components/OrderBucket/OrderBucket";

function App() {
  const [orderedPizza, setOrderedPizza] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(isModalOpen, "isModalOpen");

  const handleSetOrderedPizza = (pizzaName, pizzaPrice) => {
    setOrderedPizza((prevState) => {
      let newState = { ...prevState };
      if (pizzaName in newState) {
        let newAmount = newState[pizzaName]["amount"] + 1;
        newState[pizzaName] = {
          ...newState[pizzaName],
          amount: newAmount,
          total_price: newAmount * pizzaPrice,
        };
      } else {
        newState[pizzaName] = {
          amount: 1,
          price: pizzaPrice,
          total_price: pizzaPrice,
        };
      }
      return newState;
    });
  };

  const increasePizzaAmount = (pizzaName, pizzaPrice) => {
    setOrderedPizza((prevState) => {
      let newState = { ...prevState };
      let newAmount = newState[pizzaName]["amount"] + 1;
      newState[pizzaName] = {
        ...newState[pizzaName],
        amount: newAmount,
        total_price: newAmount * pizzaPrice,
      };
      return newState;
    });
  };

  const decreasePizzaAmount = (pizzaName, pizzaPrice) => {
    setOrderedPizza((prevState) => {
      let newState = { ...prevState };
      if (newState[pizzaName]["amount"] > 1) {
        let newAmount = newState[pizzaName]["amount"] - 1;
        newState[pizzaName] = {
          ...newState[pizzaName],
          amount: newAmount,
          total_price: newAmount * pizzaPrice,
        };
      }
      return newState;
    });
  };
  //QH -> read more about Object methods
  const removePizzaOrder = (pizzaName) => {
    setOrderedPizza((prevState) => {
      return Object.fromEntries(
        Object.entries(prevState).filter((pizza) => {
          return pizza[0] !== pizzaName;
        })
      );
    });
  };

  return (
    <div className="container">
      <Header />
      <OrderBucket
        orderedPizza={orderedPizza}
        increasePizzaAmount={increasePizzaAmount}
        decreasePizzaAmount={decreasePizzaAmount}
        removePizzaOrder={removePizzaOrder}
        openModal={openModal}
      />
      <Menu handleSetOrderedPizza={handleSetOrderedPizza} />
      <Footer />
    </div>
  );
}

export default App;
