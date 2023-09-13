import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setSelect(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex items-center gap-5 "
    >
      <h2 className="text-lg ">Add more collection to your packing list</h2>
      <div className="flex gap-2">
        <select
          className="bg-yellow w-11 rounded-md"
          onChange={(e) => setSelect(Number(e.target.value))}
          value={select}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="rounded-md text-black px-3 w-52 "
          type="text"
          placeholder="item..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-yellow w-20 rounded-md font-bold">Add</button>
      </div>
    </form>
  );
}
