
import { RES_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const RestaurantCard = ({resInfo}) => {
  const {
    id,cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla
  } = resInfo;
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate(`/restaurant/${id}/menu`);
  };
  return (
    <div className="res-card" onClick={handleClick} style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
