import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useGetModules } from "@hooks/useGetModules";

const status = [{ name: "All" }, { name: "Active" }, { name: "Inactive" }];

export default function StatusFilter({ filterStatus }: any) {
  const [selectedStatus, setSelectedStatus] = useState(status[0]);

  // we should get another prop with the name of the module
  const {items} = useGetModules('public2');

  return (
    <div className="w-56 top-16">
      <Listbox
        value={selectedStatus}
        onChange={(optionSelected) => {
          setSelectedStatus(optionSelected);
          filterStatus(optionSelected, items);
        }}
      >
        <Listbox.Label className="block text-sm font-medium text-gray-700">
          Filter by Status
        </Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full h-12 py-2 pl-3 pr-10 text-base text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500">
            <span className="block truncate">{selectedStatus.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {status.map((optionStatus, optionStatusIdx) => (
                <Listbox.Option
                  key={optionStatusIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={optionStatus}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {optionStatus.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
