import "../assets/css/components/Card.css";
import FavoriteCheckbox from "../assets/css/components/HeartCheck";

const Card = ({ cardSize }) => {
  const cardClassName = cardSize === "sm" ? "sm-card-container" : "";
  return (
    <section className={`card-container box-shadow ${cardClassName}`}>
      {/* takes over 60 percent of the height */}
      <img />
      <section className="header">
        <h4>Name</h4>
        <p>Zoo</p>
      </section>
      <section className="information">
        <FavoriteCheckbox />
        {/* toggle event */}
        <div>
          <p className="border">Total Current Family</p>
        </div>
      </section>
    </section>
  );
};
export default Card;
