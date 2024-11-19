import "../assets/css/pages/Home.css";
import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const [currentView, setCurrentView] = useState("All");
  const renderCards = () => {
    if (currentView === "All") {
      return (
        <>
          <article className="card-containers">
            <h3>Groups</h3>
            <Card cardSize="lg" />
            <Card cardSize="lg" />
          </article>
          <article className="card-containers">
            <h3>Animals</h3>
            <div className="cards">
              <Card cardSize="sm" />
              <Card cardSize="sm" />
            </div>
          </article>
          <article className="card-containers">
            <h3>Coworkers</h3>
            <div className="cards">
              <Card cardSize="sm" />
              <Card cardSize="sm" />
            </div>
          </article>
        </>
      );
    } else if (currentView === "Coworkers") {
      return (
        <>
          <article className="card-containers">
            <h3>Coworkers</h3>
            <div className="cards">
              <Card cardSize="sm" />
              <Card cardSize="sm" />
            </div>
          </article>
        </>
      );
    } else if (currentView === "Groups") {
      return (
        <>
          <article className="card-containers">
            <h3>Groups</h3>
            <Card cardSize="lg" />
            <Card cardSize="lg" />
          </article>
        </>
      );
    } else {
      return (
        <>
          <article className="card-containers">
            <h3>Animals</h3>
            <div className="cards">
              <Card cardSize="sm" />
              <Card cardSize="sm" />
            </div>
          </article>
        </>
      );
    }
  };
  return (
    <section className="home-container">
      <main>
        {/* will change nest to particular biome that the person works in */}
        <h1>Your "Nests"</h1>
        <p>Central place for every person, place, or thing you know here.</p>
        {renderCards()}
      </main>
      <Sidebar setCurrentView={setCurrentView} />
    </section>
  );
};

export default Home;
