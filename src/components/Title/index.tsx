import React from "react";

function Title({ title }: any) {
  return (
    <>
      <h1 className="p-2 mx-8 mt-5 text-3xl font-semibold text-gray-900 border-l-4 border-blue-500 sm:text-left sm:ml-32">
        {title}
      </h1>
    </>
  );
}

export default Title;
