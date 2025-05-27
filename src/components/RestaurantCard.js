import { RES_IMG } from "../utils/constants";

const RestuarantCard = (props) => (
  <div className="res-card">
    {console.log(props)}
    <img
      className="res-logo"
      src={RES_IMG + props.cloudinaryImageId}
    />
    <h3>{props.name}</h3>
    <h3>{props.cuisines}</h3>
    <h3>{props.avgRating}</h3>
    <h3>{props.costForTwo}</h3>
  </div>
);

export default RestuarantCard;
