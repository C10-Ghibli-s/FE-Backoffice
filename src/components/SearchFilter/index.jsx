import React, { useState } from "react";
import { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { useGetModules } from "@hooks/useGetModules";

export default function SearchFilter({ dataItems, searchValue, titleModule }) {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const { items } = useGetModules(titleModule);
  console.log('items',items);
  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          // it still needs to differentiate between users/producers/movie (nickname, name, title respectively)
          item.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <div className="z-10 top-16 w-96 max-w-[300px]">
        <Combobox
          className="h-12"
          value={selected}
          onChange={(optionSelected) => {
            setSelected(optionSelected);
            searchValue(optionSelected);
          }}
        >
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="relative w-full h-full overflow-hidden text-left bg-white rounded-md shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <Combobox.Input
                className="block w-full h-full py-2 pl-10 pr-12 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search with name"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelected("");
                }}
              />
              <div className="absolute inset-y-0 right-0 flex">
                <Combobox.Button
                  className="w-20 text-white bg-blue-400 cursor-pointer rounded-r-md hover:bg-blue-500"
                  onClick={() => {
                    searchValue(query);
                  }}
                >
                  <span>Search</span>
                </Combobox.Button>
              </div>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-96 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredItems.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                    Nothing found.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={item.title}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item.title}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-blue-600" : "text-blue-600"
                              }`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
}
