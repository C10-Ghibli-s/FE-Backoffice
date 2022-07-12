import React, { useState, useEffect } from "react";
import CardItem from "@components/CardItem";
import { ProductionMemberModal } from "@components/ProductionMemberModal";
import { ProfileModal } from "@components/ProfileModal";
import { MovieModal } from "@components/MovieModal";
import { modalTypes } from '@customTypes/updateModalTypes';
import { reqResponse } from "@customTypes/ErrorHandling";
import { CloseModalButton } from "@components/CloseModalButton";
import { ErrorIcon } from "@components/ErrorIcon";
import { OkResponseIcon } from "@components/OkResponseIcon";

function ListItems({dataItems, orderItems, orderBy, titleModule}:any) {
  console.log("This is ListItems");

  // This function and state triggers the modal. triggers the edition modal
  const [openShowModal, setOpenShowModal] = useState<modalTypes>({item:null, data: {}});
  const [reqStatus, setReqStatus] = useState<reqResponse>(null);

  useEffect(() => {
    orderItems(orderBy, titleModule);
    console.log("This is useEffect from ListItems");
    console.log("orderBy from ListItems ", orderBy);
  }, []);

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
        setReqStatus={setReqStatus}
        reqStatus={reqStatus}
      />
      <ProfileModal
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        setReqStatus={setReqStatus}
        reqStatus={reqStatus}
      />
      <MovieModal 
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        setReqStatus={setReqStatus}
        reqStatus={reqStatus}
      />
    </>
  );
};

export default ListItems;

