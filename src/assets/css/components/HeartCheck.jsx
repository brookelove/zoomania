import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <section onClick={toggleChecked} style={{ cursor: "pointer" }}>
      <FaHeart color={checked ? "red" : "grey"} />
    </section>
  );
};

export default FavoriteCheckbox;
