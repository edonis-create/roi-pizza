import "./Card.css";
const Card = (props) => {
  return (
    <div className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.ingridients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </div>
  );
};

export default Card;
