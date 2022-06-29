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
import { UPDATE_PRODUCER } from "@services/mutations/update/updateProducer";
import { newProducerType } from "@customTypes/createItemTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { newProducerSchema } from "@schemas/createNewItemSchema";

interface ModalProps {
  openShowModal: string|null;
  setOpenShowModal: React.Dispatch<React.SetStateAction<string|null>>;
  producer: string;
}

function ProductionMemberModal({
  openShowModal,
  setOpenShowModal,
  producer
}: ModalProps) {
  // When DB has been deployed, fill this object with the api data.
  const teamProduction = {
    fullName: "John Doe",
    role: "Musician",
  };
  const [ReqStatus, setReqStatus] = React.useState<{}>();
  // Editing is the item we will focus on edit inside producers(director, writer, musician) or null to close the modal.
  const [editing, setEditing] = React.useState<string|null>(null);
  // form submit handler
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<newProducerType>({
    resolver: yupResolver(newProducerSchema)
  });
  const UpdateProducer: SubmitHandler<newProducerType> = (data: newProducerType) => {
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
      res.data?.errors
      ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      : setReqStatus({success: "Movie created successfully :D"})
    })
    .catch(err => 
      setReqStatus({error:{ 
        serverError: `${err}`,
        errorMessage: "Ups!, something went wrong, try later."
      }})
    )
  }

  if (openShowModal !== 'producer') {
    return null;
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-2 rounded-lg sm:items-center h-[70%] sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <ModalTitle>Team production</ModalTitle>
          <div className="mx-auto w-[60%] sm:w-96">
            <figure className="mx-auto sm:mt-4 sm:w-fit w-fit">
              <Image
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                width="150"
                height="150"
                alt={teamProduction.fullName}
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
                    id="name" type="text" defaultValue={teamProduction.fullName} placeholder={`new ${editing}'s name`}
                    {...register('name')}
                    />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  <input
                    className="hidden"
                    id="producerId" type="text" defaultValue={'1'}
                    {...register('id')}
                    />
                  <input
                    className="hidden"
                    id="producerRole" type="text" defaultValue={producer}
                    {...register('producerRole')}
                  />
                  <div className="mx-auto relative">
                    <DeleteElementButton /> 
                    <input
                      type="submit" value="Complete"
                      className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"
                    />
                  </div>
                </form>
              }
              {editing == null && 
                <p id='currProducerName' className="my-2 text-xl font-semibold text-center">
                {teamProduction.fullName}
                </p>
              }
              <p className="mx-auto text-center p-0.5 rounded-lg px-2 bg-violet-500/[0.2] w-[60%] sm:w-[20%] ">
                {producer}
              </p>
            </div>
          </div>
          <div className="relative bottom-14 sm:bottom-0 sm:my-4">
            { editing == null && (
                <EditButton itemToEdit={producer} setEditing={setEditing} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export { ProductionMemberModal };
