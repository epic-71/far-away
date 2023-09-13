import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function onHandleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are You sure");
    if (confirmed) setItems([]);
  }
  return (
    <div className="bg-body w-full h-screen flex flex-col items-center gap-5 ">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onHandleClearList={handleClearList}
        onHandleDelete={handleDelete}
        onCheckedItem={onHandleChecked}
      />
      <Footer items={items} />
    </div>
  );
}
