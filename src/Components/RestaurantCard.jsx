import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h4>Cost for two: {costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;
