import React from "react";

const items = [
  {
    name: "Item 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    name: "Item 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    name: "Item 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    name: "Item 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];
const title = "Show Module"

const ListItems = () => {
  return (
    <>
      <h1 className="p-2 mx-8 mt-5 text-3xl font-semibold text-gray-900 border-l-4 border-blue-500 sm:text-left sm:ml-32">
        {title}
      </h1>
      <section className="flex flex-col items-center justify-center mx-8 my-8 bg-white sm:flex rounded-xl">
        <div className="py-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mt-10 mb-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 hover:cursor-pointer">
                {items.map((item) => (
                  <div key={item.name} className="relative m-5">
                    <dt>
                      <div className="absolute flex items-center justify-center w-16 h-16 text-white bg-gray-200 rounded-full"></div>
                      <h2 className="ml-20 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </h2>
                    </dt>
                    <dd className="mt-2 ml-20 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListItems;
