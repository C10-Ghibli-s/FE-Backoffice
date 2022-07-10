import Image from "next/image";
import React from "react";

// Dependencies components
import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { ModalTitle } from "@components/ModalTitle";

// Dependencies services
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { UPDATE_PRODUCER } from "@services/mutations/update/producer";
import { updateProducerType } from "@customTypes/createItemTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { newProducerSchema } from "@schemas/createNewItemSchema";
import { modalTypes } from "@customTypes/updateModalTypes";

import { reqResponse } from "@customTypes/ErrorHandling";
import { CloseModalButton } from "@components/CloseModalButton";
import { ErrorIcon } from "@components/ErrorIcon";
import { OkResponseIcon } from "@components/OkResponseIcon";

interface ModalProps {
  openShowModal: modalTypes,
  setOpenShowModal: React.Dispatch<React.SetStateAction<modalTypes>>,
  setReqStatus: React.Dispatch<React.SetStateAction<reqResponse>>,
  reqStatus: reqResponse,
}

function ProductionMemberModal({
  openShowModal,
  setOpenShowModal,
  setReqStatus,
  reqStatus,
}: ModalProps) {

  // Editing is the item we will focus on edit inside producers(director, writer, musician) or null to close the modal.
  const [editing, setEditing] = React.useState<string|null>(null);
  // form submit handler
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<updateProducerType>({
    resolver: yupResolver(newProducerSchema)
  });
  const UpdateProducer: SubmitHandler<updateProducerType> = (data: updateProducerType) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      UPDATE_PRODUCER(data),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      if(reqStatus !== null) {
        return;
      } else {
        res.data?.errors
          ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
          : setReqStatus({success: "producer updated successfully :D"})
      }
      
    })
    .catch(err => 
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    )
  }
  const producerData = openShowModal?.data?.producerData !== undefined 
  ? openShowModal.data.producerData 
  : { 
      id: 0,
      name: "PRODUCER TEST",
      producerRole: "Director"
    };

  if (openShowModal.item !== 'producer') {
    return null;
  } else {
    return (
      <div className="z-20 fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-2 rounded-lg sm:items-center h-[70%] sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <h2 className="w-11/12 my-3 text-2xl font-semibold text-left text-gray-900 border-l-4 border-blue-500 sm:ml-6 sm:text-3xl indent-2">
            Team Producer
          </h2>
          <div className="mx-auto w-[60%] sm:w-96">
            <figure className="mx-auto sm:mt-4 sm:w-fit w-fit">
              <Image
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                width="150"
                height="150"
                alt={`${producerData.name}'s profile picture`}
                className="mx-auto rounded-full"
              ></Image>
            </figure>
            <div className="w-full">
              {editing !== null  &&
                <form onSubmit={handleSubmit(UpdateProducer)} className="my-2 text-xl font-semibold text-center flex flex-col">
                  <label htmlFor="name">Insert new name</label>
                  <input 
                    autoFocus
                    className="mx-auto my-4 text-center p-0.5 rounded-lg px-2 border-2 border-sky-500 w-[60%]"
                    id="name" type="text" defaultValue={producerData.name} placeholder={`new ${editing}'s name`}
                    {...register('name')}
                    />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  <input
                    className="hidden"
                    id="producerId" type="text" defaultValue={producerData.id}
                    {...register('id')}
                    />
                  <input
                    className="hidden"
                    id="producerRole" type="text" defaultValue={producerData.producerRole}
                    {...register('producerRole')}
                    />
                  <div className="mx-auto relative">
                    <input
                      type="submit" value="Complete"
                      className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"
                    />
                    <DeleteElementButton itemToDelete={producerData.producerRole} id={producerData.id}
                      setReqStatus={setReqStatus}
                      /> 
                  </div>
                </form>
              }
              {editing == null && 
                <p id='currProducerName' className="my-2 text-xl font-semibold text-center">
                {producerData.name}
                </p>
              }
              <p className="mx-auto text-center p-0.5 rounded-lg px-2 bg-violet-500/[0.2] w-[60%] sm:w-[20%] ">
                {producerData.producerRole}
              </p>
            </div>
          </div>
          <div className="relative bottom-14 sm:bottom-0 sm:my-4">
            { editing == null && (
                <EditButton itemToEdit={producerData.producerRole} setEditing={setEditing} />
            )}
          </div>
        </div>
        {reqStatus !== null && (
        <div className={`bg-gray-200/95 w-full sm:w-3/5 max-w-md p-8 rounded-2xl flex flex-col justify-center p-12 absolute mt-60`}>
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
      </div>
    );
  }
}

export { ProductionMemberModal };
