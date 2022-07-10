import React from "react";

const CardItem = (prop: any) => {
  const { item, titleModule, setOpenShowModal } = prop;
  let itemData: any;
  switch (titleModule) {
    case "Users":
      itemData = { item: titleModule, data: { userData: item } };
      break;
    case "Movies":
      itemData = { item: titleModule, data: { movieData: item } };
      break;
    case "Musicians":
      itemData = {
        item: "producer",
        data: { producerData: { ...item, producerRole: "Musician" } },
      };
      break;
    case "Writers":
      itemData = {
        item: "producer",
        data: { producerData: { ...item, producerRole: "Writer" } },
      };
      break;
    case "Directors":
      itemData = {
        item: "producer",
        data: { producerData: { ...item, producerRole: "Director" } },
      };
      break;
    default:
      break;
  }

  return (
    <div
      onClick={() => {
        setOpenShowModal(itemData);
      }}
      className="relative flex items-center transition-opacity border-b-2 hover:bg-gray-200/50 p-4 hover:cursor-pointer min-w-[300px] sm:max-w-[500px] lg:w-[500px] sm:h-fit"
    >
      <div className="min-w-[75px] min-h-[75px] text-white bg-gray-200 rounded-full"></div>
      <svg
        className="absolute w-5 h-5 text-gray-500 rotate-45 right-4 top-5 dark:text-gray-400 hover:text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <div className="w-auto">
        <h2 className="ml-4 text-lg font-medium leading-6 text-gray-900">
          {item?.nickname}
          {item?.name}
          {item?.title?.title}
        </h2>
        <dd className="mt-2 ml-4 text-base text-gray-500 line-clamp-3 ">
          {item?.filmDescription}
        </dd>
      </div>
    </div>
  );
};

export default CardItem;
