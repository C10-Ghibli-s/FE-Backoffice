import React from "react";

interface ModalProps {
  state: any;
  value: boolean | string;
  className?: string;
  setEditing: React.Dispatch<React.SetStateAction<string | null>>;
}

function ClosingModal({ state, value , setEditing}: ModalProps) {
  const handleCloseModalButton = () => {
    state({item: value, itemData: null});
    setEditing(null)
  };
  return (
    <span
      className="absolute w-6 h-6 bg-center bg-no-repeat bg-cover cursor-pointer right-4 top-4 bg-cross-icon"
      onClick={handleCloseModalButton}
    >
    </span>
  );
}

export { ClosingModal };
