import placeHolderSquare from "../assets/images/placeholder-square.jpg";
import Footer from "../components/Footer";
import { quotes } from "../utils/data";
import QuoteCard from "../components/QuoteCard";
import "../assets/css/pages/Landing.css";

function Landing() {
  return (
    <div className="landingSection">
      <header className="header d-c-c-flex">
        {/* <h1>Featured Zoo's</h1> */}
        {/* using carousel and getting data passed through there potentially make a featured section of zoos that holds 5 articles about teh most recent news !*/}
        <h2>Zoo Name</h2>
        <h4>Current Total Animals</h4>
        <section className="buttonContainer">
          <button>Map</button>
          <button>Sign In</button>
        </section>
      </header>
      <aside className="mini-featured d-a-flex">
        <img src={placeHolderSquare} alt="placeholder image" />
        <img src={placeHolderSquare} alt="placeholder image" />
        <img src={placeHolderSquare} alt="placeholder image" />
      </aside>
      <section>
        <div className="subSection">
          <h4>Testimonials</h4>
          <p>Reviews from real people who use this app</p>
        </div>
        <div className="quoteContainer">
          {quotes.map(({ id, quote, author }) => (
            <QuoteCard key={id} text={quote} author={author} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
