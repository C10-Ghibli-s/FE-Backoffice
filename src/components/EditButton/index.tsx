import React, { FC, SetStateAction } from "react";

type editing = {
  itemToEdit: string | null;
  setEditing: React.Dispatch<SetStateAction<string|null>>
}

const EditButton: FC<editing> = ({setEditing, itemToEdit}:editing) => {

  return (
    <button
      onClick={() => setEditing(itemToEdit)}
      className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52"
    >
      Edit
    </button>
  );
}

export { EditButton };
