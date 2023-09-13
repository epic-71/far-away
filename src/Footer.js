export default function Footer({ items }) {
  if (!items.length)
    return <p className="text-white text-xl italic">Start adding items 🚀</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log((0 / 0) * 100);
  return (
    <footer className="text-white text-xl italic">
      {percentage === 100 ? (
        <span>
          ✈️ Ready to go{" "}
          <span className="text-yellow text-2xl font-bold">
            {" "}
            ( {percentage}% )
          </span>
        </span>
      ) : (
        <h1>
          You have
          <span className="font-bold text-2xl text-yellow"> {numItems} </span>
          items on your list , and you are already packed
          <span className="font-bold text-2xl text-yellow"> {numPacked} </span>
          <span className="text-2xl font-bold ">( {percentage}% )</span>
        </h1>
      )}
    </footer>
  );
}
