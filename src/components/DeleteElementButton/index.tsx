import React from "react";

function DeleteElementButton(itemToDelete:{itemToDelete: string}) {
  const handleDeleteElement = () => {
    alert("UPDATE DELETE PROFILE");
  };

  return (
    <span
      onClick={handleDeleteElement}
      className="absolute w-8 h-8 mx-2 bg-center bg-no-repeat bg-cover cursor-pointer -right-12 bottom-1 bg-trash-icon"
    >
    </span>
  );
}

export { DeleteElementButton };
