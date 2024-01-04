import React, { useState } from "react";
import "./App.css";
import { ImageHeader } from "./components/ImageHeader";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Items } from "./types/utils";
import { ItemList } from "./components/ItemList";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((items) => [
      ...items,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center mb-8">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5 " onSubmit={handleSubmit}>
          <Input
            types="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-gray-700 w-full p-2">Add </Button>
        </form>
        <div className=" h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
