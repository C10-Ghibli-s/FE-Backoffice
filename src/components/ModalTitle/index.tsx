import React from "react";


function ModalTitle(children: string): JSX.Element {
  return (
    <h2 className="w-11/12 my-3 text-2xl font-semibold text-left text-gray-900 border-l-4 border-blue-500 sm:ml-6 sm:text-3xl indent-2">
      {children}
    </h2>
  );
}

export { ModalTitle };