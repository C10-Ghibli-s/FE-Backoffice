import React, { useEffect, useState } from "react";
import CardItem from "@components/CardItem";
import {useGetModules} from '../../hooks/useGetModules'

// It should be replaced when we have db connection
const itemsData = [
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


const ListItems = () => {
  // it should use query selector
  const {items}:any = useGetModules('public2')
  console.log("items", items)

  return (
    <>
      <section className="flex flex-col items-center justify-center mx-8 my-8 bg-white sm:flex rounded-xl">
        <div className="py-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <section className="mt-10 mb-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 hover:cursor-pointer">
                {items.map((item: { id: string; }) => (
                  <CardItem item={item} key={item.id}/>
                ))}
              </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListItems;

