import "../assets/css/components/Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sticky border box-shadow">
      <h4>Home</h4>
      {/* <ul className="d-c-c-flex"> */}
      <a>Animals</a>
      <a>Coworkers</a>
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
