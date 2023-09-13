export default function Item({ item, onHandleDelete, onCheckedItem }) {
  return (
    <li className="text-xl flex gap-1 items-center">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckedItem(item.id)}
      />
      <span className={item.packed ? "line-through" : ""}>
        {item.description} {item.select}
      </span>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={6}
          stroke="red"
          className="w-6 h-6"
          onClick={() => onHandleDelete(item.id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
