const ShimmerComponent = () => {
  const shimmerCards = Array.from({ length: 8 });
  return (
    <div className="shimmer-container">
      {shimmerCards.map((_, index) => {
        return <div className="shimmer-card" id={index}></div>;
      })}
    </div>
  );
};

export default ShimmerComponent;
