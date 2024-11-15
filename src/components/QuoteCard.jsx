import "../assets/css/components/QuoteCard.css";
import profilePicture from "../assets/images/profilePhoto.jpg";

const QuoteCard = ({ id, text, author }) => {
  return (
    <section key={id} className="quoteCard d-b-c-flex">
      <h4>"{text}"</h4>
      <section className="d-s-flex">
        <img src={profilePicture} />
        <p> {author}</p>
      </section>
    </section>
  );
};
export default QuoteCard;
