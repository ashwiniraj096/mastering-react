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
    <div
      aria-labelledby="resto-card"
      data-testid="restaurantCard"
      className="card w-[300px] p-2 m-2 rounded-2xl border-2 border-grey-50 "
    >
      <div className="mb-4 shadow-lg shadow-gray-600">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="image  h-60 w-full rounded-xl"
        />
      </div>

      <div>
        <h2 className="font-bold">{name}</h2>
        <h3 className="font-semibold">
          ⭐{avgRating} {sla?.slaString}
        </h3>
        <h3 className="text-large antialiased text-gray-400 truncate w-11/12">
          {cuisines?.join(", ")}
        </h3>
        <h4>Cost for two: {costForTwo}</h4>
        <h4></h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
