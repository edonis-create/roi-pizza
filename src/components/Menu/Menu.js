import { pizzaData } from "../../data/data";
import CardList from "../CardList/CardList";
import "./Menu.css";

const Menu = (props) => {
  //Komponenta fillon me shkronje te madhe
  let pizzas = pizzaData;
  const isError = pizzas.length === 0;

  if (isError) {
    return <p>Sorry we Failed to load Pizza Menu, please come back later</p>;
  }

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>The best pizza in Prishtina city</p>
      <CardList
        pizzas={pizzaData}
        handleSetOrderedPizza={props.handleSetOrderedPizza}
      />
    </main>
  ); // Komponenta kthen se paku nje element
};

export default Menu; // Komponenta behet e qasshme per gjithe App-in
