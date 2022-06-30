import React from "react";

const CardItem = (prop:any) => {
  return (
      <div className="relative p-10 transition-opacity border-b-2 hover:bg-gray-200/50 hover:cursor-pointer">
        <dt>
          <div className="absolute flex items-center justify-center w-16 h-16 text-white bg-gray-200 rounded-full"></div>
          <div className="flex">
            <h2 className="ml-20 text-lg font-medium leading-6 text-gray-900">
              {prop.item?.nickname}
              {prop.item?.name}
              {prop.item?.title?.title}
            </h2>
            <div className="absolute rotate-45 right-6">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </dt>
        <dd className="mt-2 ml-20 text-base text-gray-500 line-clamp-3 ">
          {prop.item?.description}
        </dd>
      </div>
  );
};

export default CardItem;
