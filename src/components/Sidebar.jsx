import "../assets/css/components/Sidebar.css";
const Sidebar = ({ setCurrentView }) => {
  return (
    <aside className="sticky border box-shadow">
      <h4 onClick={() => setCurrentView("All")}>Home</h4>
      {/* <ul className="d-c-c-flex"> */}
      <a onClick={() => setCurrentView("Animals")}>Animals</a>
      <a onClick={() => setCurrentView("Coworkers")}>Coworkers</a>
      <a onClick={() => setCurrentView("Groups")}>Groups</a>
      <a>Favorites</a>
      <a>Map</a>
      <a>Messages</a>
      <a>Research</a>
      <a>Schedule</a>
      <a>Your Feed</a>
      <a>Zoo</a>
      {/* </ul> */}
    </aside>
  );
};
export default Sidebar;
