import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onHandleDelete,
  onCheckedItem,
  onHandleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="text-white w-[75%] h-[47rem] relative pt-16">
      <ul className="flex gap-6 flex-wrap">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDelete={onHandleDelete}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
      <div className="absolute w-full h-20 flex gap-5 justify-center bottom-5">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-yellow w-56 h-11 rounded-xl"
        >
          <option value="packed" key="">
            Sort by Packed
          </option>
          <option value="input" key="">
            Sort by Input
          </option>
          <option value="description" key="">
            Sort by Description
          </option>
        </select>
        <button
          className="bg-yellow h-11 w-20 rounded-xl"
          onClick={onHandleClearList}
        >
          clear
        </button>
      </div>
    </div>
  );
}
