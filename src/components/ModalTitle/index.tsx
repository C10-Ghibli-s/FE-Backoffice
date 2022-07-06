import React from "react";

function ModalTitle({ children }: any): JSX.Element {
  return (
    <h2 className="text-2xl font-semibold text-left text-gray-900 border-l-4 border-blue-500  sm:text-3xl indent-2">
      {children}
    </h2>
  );
}

export { ModalTitle };
