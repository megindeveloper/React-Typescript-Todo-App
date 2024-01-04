import { Button } from "./Button";
import { Items, ReactSetState } from "../types/utils";
type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

export const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p>{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <img
          className="w-3 mr-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
        />
      </Button>
    </div>
  ));
};
