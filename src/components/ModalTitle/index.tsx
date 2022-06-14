import React from "react";

interface TitleProps {
  children: string
  className?: string
}


function ModalTitle({ children }: TitleProps): JSX.Element {
  return (
    <h2 className="w-11/12 my-3 ml-6 text-3xl font-semibold text-left text-gray-900 border-l-4 border-blue-500 indent-2">
      {children}
    </h2>
  );
}

export { ModalTitle };