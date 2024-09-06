import "./Footer.css";
const Footer = () => {
  const hour = new Date().getHours();
  const isOpen = hour >= 8 && hour <= 17;

  //EVENTS - REACT

  const handleOnButtonClick = (isOpen) =>
    !isOpen && alert("We cannot accept orders, we are closed");

  return (
    <footer className="footer">
      <div className="order">
        <p>{`We are currently ${
          isOpen ? "open" : "closed"
        } | Working hours 08:00 to 17:00`}</p>
        {/* {isOpen && ( */}
        <button onClick={() => handleOnButtonClick(isOpen)} className="btn">
          ORDER NOW
        </button>
        {/* )} */}
      </div>
    </footer>
  );
};

export default Footer;
