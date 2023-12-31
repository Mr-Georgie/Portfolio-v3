export const Filter = ({ filterList }) => {
  return (
    <div className="flex items-center gap-6 font-semibold text-sm overflow-x-scroll">
      <span className="rounded-3xl px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">
        All
      </span>
      {filterList.map((filter, index) => (
        <span id={index}>{filter}</span>
      ))}
    </div>
  );
};
