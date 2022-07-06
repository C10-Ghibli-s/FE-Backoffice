import React, { useState } from "react";
import CardItem from "@components/CardItem";
import { ProductionMemberModal } from "@components/ProductionMemberModal";
import { ProfileModal } from "@components/ProfileModal";
import { MovieModal } from "@components/MovieModal";
import { modalTypes } from '@customTypes/updateModalTypes';
import { reqResponse } from "@customTypes/ErrorHandling";
import { CloseModalButton } from "@components/CloseModalButton";
import { ErrorIcon } from "@components/ErrorIcon";
import { OkResponseIcon } from "@components/OkResponseIcon";

function ListItems({dataItems, titleModule}:any) {

  // This function and state triggers the modal. triggers the edition modal
  const [openShowModal, setOpenShowModal] = useState<modalTypes>({item:null, data: {}});
  const [reqStatus, setReqStatus] = useState<reqResponse>(null);

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
      />
      <ProfileModal
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        setReqStatus={setReqStatus}
      />
      <MovieModal 
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        setReqStatus={setReqStatus}
      />
      {reqStatus !== null && (
        <div className={`bg-gray-200/95 w-full sm:w-3/5 max-w-md p-8 rounded-2xl flex flex-col justify-center p-12 relative`}>
          {reqStatus.error !== undefined && (
              <React.Fragment>
                <button className='absolute top-8 right-8' onClick={() => setReqStatus(null)}>
                  <CloseModalButton/>
                </button>
                <ErrorIcon/>
                <h3 className='text-center mt-8 mb-16 text-xl'> 
                {reqStatus.error.serverError !== undefined && <p className='text-center text-red-700'>{reqStatus.error.serverError}</p>}
                {reqStatus.error.errorMessage} 
                </h3>
              </React.Fragment>
            )}
            {reqStatus.success !== undefined && (
              <React.Fragment>
                <OkResponseIcon/>
                <h3 className='text-center mt-8 mb-16 text-xl'> {reqStatus.success} </h3>
                <button 
                  className='bg-sky-500/75 hover:bg-sky-500 border border-sky-700 text-white mx-auto w-2/5 h-10 rounded-md'
                  onClick={() => {
                    setReqStatus(null);
                    setOpenShowModal({item: null, data: {}});
                  }}>
                    Accept
                </button>
              </React.Fragment>
            )}
        </div>
      )}
    </>
  );
};

export default ListItems;

