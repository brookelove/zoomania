import "../assets/css/pages/Home.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <section className="home-container">
      <main>
        {/* will change nest to particulare biome that the person works in */}
        <h1>Your "Nest"</h1>
        <article>
          <h3>Groups</h3>
          {/* how to handle more than 2 groups per page */}
          <Card />
          <Card />
        </article>
        <article>
          <h3>Animals</h3>
        </article>
        <article>
          <h3>Coworkers</h3>
        </article>
      </main>
      <Sidebar />
    </section>
  );
};

export default Home;
