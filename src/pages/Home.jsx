import { useState } from "react";
import "../assets/css/pages/Home.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const [currentView, setCurrentView] = useState("All");
  const renderCards = () => {
    if (currentView === "All") {
      return (
        <>
          <article className="lg-card-containers">
            <h3>Groups</h3>
            <Card />
            <Card />
          </article>
          <article className="lg-card-containers">
            <h3>Animals</h3>
            <Card />
            <Card />
          </article>
          <article className="lg-card-containers">
            <h3>Coworkers</h3>
            <Card />
            <Card />
          </article>
        </>
      );
    } else if (currentView === "Coworkers") {
      return (
        <>
          <article className="lg-card-containers">
            <h3>Coworkers</h3>
            <Card />
            <Card />
          </article>
        </>
      );
    } else if (currentView === "Groups") {
      return (
        <>
          <article className="lg-card-containers">
            <h3>Groups</h3>
            <Card />
            <Card />
          </article>
        </>
      );
    } else {
      return (
        <>
          <article className="lg-card-containers">
            <h3>Animals</h3>
            <Card />
            <Card />
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

        {renderCards()}
      </main>
      <Sidebar setCurrentView={setCurrentView} />
    </section>
  );
};

export default Home;
