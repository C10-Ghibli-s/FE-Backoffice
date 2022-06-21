import React from "react";

function EditButton(event: any) {
  const handleEditButton = () => {
    event;
  };

  return (
    <button
      onClick={handleEditButton}
      className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52"
    >
      Edit
    </button>
  );
}

export { EditButton };
