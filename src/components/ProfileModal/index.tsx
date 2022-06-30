import Image from "next/image";
import React from "react";

import { EditButton } from "@components/EditButton";
import { ClosingModal } from "@components/ClosingModal";
import { DeleteElementButton } from "@components/DeleteElementButton";
import { ModalTitle } from "@components/ModalTitle";
import Select from "react-select";
import { updateUserForQuery } from '@customTypes/createItemTypes';

import { SubmitHandler, useForm } from "react-hook-form";
import { newUserSchema } from '@schemas/createNewItemSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { UPDATE_USER } from "@services/mutations/update/user";

/**
 * This component still needs:
 * [DONE] Icons
 * [DONE] UX in buttons
 * [DONE] Atomize
 * [DONE] responsive
 * [PENDING FOR DEPLOY] db connection
 */

interface ModalProps {
  openShowModal: string|null,
  setOpenShowModal: React.Dispatch<React.SetStateAction<string|null>>,
  user: updateUserForQuery
}

function ProfileModal({ openShowModal, setOpenShowModal, user }: ModalProps) {
  const userStatus = [{label:"ACTIVE", value: 1}, {label: "BANNED", value: 2}, {label: "SUSPENDED", value: 3}];
  const [editing, setEditing] = React.useState<string|null>(null);
  const { 
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<updateUserForQuery>({
    resolver: yupResolver(newUserSchema)
  });
  const UpdateUser: SubmitHandler<updateUserForQuery> = (data: updateUserForQuery) => {
    axios.post(
      process.env.API_URL !== undefined ? process.env.API_URL : '',
      UPDATE_USER(data),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      // res.data?.errors
      // ? setReqStatus({error:{ errorMessage: res.data.errors[0].message}})
      // : setReqStatus({success: "Movie created successfully :D"})
    })
    .catch(err => {
      console.log(err);
    })
  }

  if (openShowModal !== 'user') {
    return null;
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center sm:items-start items-end">
        <div className="relative flex flex-col items-center justify-around w-full p-3 rounded-lg sm:items-center h-5/6 sm:border-2 sm:w-fit bg-slate-50 sm:h-fit top-20">
          <ClosingModal setEditing={setEditing} state={setOpenShowModal} value={false} />
          <ModalTitle className="mb-20">User profile</ModalTitle>
          {editing == null && (
            <div className="flex flex-col items-center">
              <div className="mx-40 flex items-center">
                <figure className="w-full mt-4 sm:w-fit">
                  <Image
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  width="150"
                  height="150"
                  alt={user.nickname}
                  className="rounded-full"
                  ></Image>
                </figure>
              </div>
              <div>
                <h2 className="my-1 text-2xl font-bold">{user.nickname}</h2>
                <p className="my-1"></p>
                <p className="my-1 p-0.5 rounded-lg px-2 bg-green-500/[0.2] w-fit">
                  {user.status}
                </p>
              </div>
              <div className="relative bottom-14 sm:bottom-0 sm:my-4">
                <EditButton itemToEdit={'user'} setEditing={setEditing}/>
              </div>
            </div>
          )}
          {editing === 'user' && (
              <form onSubmit={handleSubmit(UpdateUser)} className="flex flex-col items-center justify-center">
                <div className="mx-40 flex items-center">
                  <figure className="w-full mt-4 sm:w-fit">
                    <Image
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    width="150"
                    height="150"
                    alt={user.nickname}
                    className="rounded-full"
                    ></Image>
                  </figure>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <label htmlFor="nickname"></label>
                    <input type="text" className="w-full p-2 rounded-lg" placeholder="Username" id="nickname" {...register('nickname')}/>
                    {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname.message}</p>}
                  </div>
                  <p className="my-1"></p>
                  <Select
                    // @ts-ignore
                    onChange={e => document.getElementById('status').value = e.value}
                    className="w-full p-2 rounded-lg"
                    placeholder="user status"
                    options={userStatus.map(status => ({label: status.label, value: status.value}))}
                  />
                  <input defaultValue="1" {...register('status')} id='status' className='hidden' type="text"/>
                  {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                  <input defaultValue={user.id} {...register('id')} id='userId' className='hidden' type="text"/>
                </div>
                <div className="relative bottom-14 sm:bottom-0 sm:my-4">
                  <input value="Complete" type="submit" className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52 hover:cursor-pointer"/>
                  <DeleteElementButton id={user.id} itemToDelete='user'/>
                </div>
              </form>
          )}
      </div>
            </div>
    );
  }
}

export { ProfileModal };
