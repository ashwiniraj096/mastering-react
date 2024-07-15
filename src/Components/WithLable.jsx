const WithLabelComponent = (RestrauntCard) => {
  return (props) => {
    return (
      <div data-testid="label-resto-card">
        <label
          id="resto-card"
          className="absolute text-white m-4 p-2 font-extrabold"
        >
          {Object.values(props?.aggregatedDiscountInfoV3).join(" ")}
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default WithLabelComponent;
