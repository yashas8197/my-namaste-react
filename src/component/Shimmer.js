const Shimmer = () => {
  let shimmnerCard = [];
  for (let i = 0; i < 20; i++) {
    shimmnerCard.push(
      <div key={i} className="shimmer-card animate-pulse p-5 ">
        <div className="bg-gradient-to-r  from-gray-400 via-gray-400 to-gray-400 w-[220px] h-64 rounded-lg"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center mt-20">{shimmnerCard}</div>
  );
};

export default Shimmer;
