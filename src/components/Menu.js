import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
  const { resId } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=${resId}`
    );
    const json = await response.json();

    const itemCards =
      json?.data?.cards
        ?.find(card => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.flatMap(card => card?.card?.card?.itemCards || [])
        .map(itemCard => itemCard?.card?.info) || [];

    setMenuItems(itemCards);
  };

  return (
    <div className="menu">
      <h2>Menu Items</h2>
      {menuItems.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>₹{item.price / 100 || item.defaultPrice / 100}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;