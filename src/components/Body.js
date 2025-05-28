import { resList } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonObj = await data.json();
    console.log(jsonObj);

    setListOfRestaurants(
      jsonObj?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="body-div">
      <div className="filter"></div>
      <div className="search-div">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Ratted Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resInfo={res?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// const Body = () => {
//   const restaurantArray = resList?.[0]?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//   console.log("restaurantArray",restaurantArray);
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         {restaurantArray.map((restaurant) => (
//           <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
//         ))}
//       </div>
//     </div>
//   );
// };

