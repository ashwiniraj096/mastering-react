const ShimmerComponent = () => {
  const shimmerCards = Array.from({ length: 8 });
  return (
    <div className=" flex flex-wrap justify-center">
      {shimmerCards.map((_, index) => {
        return (
          <div
            className="shimmer-card card w-[300px] p-2 m-2 rounded-2xl border-2 border-grey-50 h-80"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default ShimmerComponent;
