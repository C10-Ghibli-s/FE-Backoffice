import React from "react";
import CardItem from "@components/CardItem";
import {useGetMovies} from '../../hooks/useGetMovies';
import {useGetModules} from '../../hooks/useGetModules'

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
  {
    name: "Item 5",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];
const title = "Show Module"

const ListItems = () => {

  useGetModules('public1');

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
                  <CardItem item={item} key={item.name}/>
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