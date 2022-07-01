import React, { useState } from "react";
import CardItem from "@components/CardItem";
import { ProductionMemberModal } from "@components/ProductionMemberModal";
import { ProfileModal } from "@components/ProfileModal";
import { MovieModal } from "@components/MovieModal";
import { modalTypes } from '@customTypes/updateModalTypes';

function ListItems({dataItems, titleModule}:any) {

  // This function and state triggers the modal. triggers the edition modal
  const [openShowModal, setOpenShowModal] = useState<modalTypes>({item:null, data: {}});

  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 mx-8 my-4 bg-white sm:flex rounded-xl max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-10 mb-10 md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-0 md:after:content-[''] md:after:bg-[#e5e7eb] md:after:absolute md:after:h-[calc(100%-5rem)] md:after:right-1/2 md:after:w-[2px]" >
          {dataItems.map((item:any) => (
            <CardItem item={item} key={item.id} titleModule={titleModule} setOpenShowModal={setOpenShowModal}/>
          ))}
        </div>
      </section>
      <ProductionMemberModal
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
      />
      <ProfileModal
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
      />
      <MovieModal 
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
      />
    </>
  );
};

export default ListItems;

