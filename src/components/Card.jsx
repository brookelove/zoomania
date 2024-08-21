import "../assets/css/components/Card.css";
import FavoriteCheckbox from "../assets/css/components/HeartCheck";

const Card = () => {
  return (
    <section className="card-container box-shadow">
      {/* takes over 60 percent of the height */}
      <img />
      <hr></hr>
      <section className="header">
        <h3 className="border">Name</h3>
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
