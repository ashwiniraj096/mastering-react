const WithLabelComponent = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white m-4 p-2 font-extrabold">
          {Object.values(props?.aggregatedDiscountInfoV3).join(" ")}
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default WithLabelComponent;
