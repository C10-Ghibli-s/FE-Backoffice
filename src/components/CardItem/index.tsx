import React from "react";

const CardItem = (prop:any) => {
  return (
      <div className="relative p-4 m-5">
        <dt>
          <div className="absolute flex items-center justify-center w-16 h-16 text-white bg-gray-200 rounded-full"></div>
          <h2 className="ml-20 text-lg font-medium leading-6 text-gray-900">
            {prop.item.title}
          </h2>
        </dt>
        <dd className="mt-2 ml-20 text-base text-gray-500 line-clamp-3 ">
          {prop.item.description}
        </dd>
      </div>
  );
};

export default CardItem;
