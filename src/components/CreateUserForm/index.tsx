import React, { FC } from "react";
import axios from "axios";
import Select from "react-select";
import { CREATE_USER } from "@services/mutations/create/user";
import { newUserType } from "@customTypes/createItemTypes";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { newUserSchema } from "@schemas/createNewItemSchema";
import { setReqStatusType } from "@customTypes/ErrorHandling";

export const CreateUserForm: FC<setReqStatusType> = ({
  setReqStatus,
}: setReqStatusType) => {
  let formData: newUserType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newUserType>({
    resolver: yupResolver(newUserSchema),
  });
  const rolesOptions = [
    { label: "USER", value: 1 },
    { label: "ADMIN", value: 2 },
  ];
  const CreateUserSubmit: SubmitHandler<newUserType> = (data: newUserType) => {
    formData = data;
    axios
      .post(
        process.env.API_URL !== undefined ? process.env.API_URL : "",
        CREATE_USER(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        res.data?.errors
          ? setReqStatus({
              error: { errorMessage: res.data.errors[0].message },
            })
          : setReqStatus({ success: "User created successfully :D" });
      })
      .catch(err =>
        setReqStatus({
          error: {
            serverError: `${err}`,
            errorMessage: "Ups!, something went wrong, try later.",
          },
        })
      );
  };
  return (
    <form
      className="flex flex-col items-center justify-center sm:m-6 sm:pt-8"
      onSubmit={handleSubmit(CreateUserSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="email">email</label>
        <input
          className="h-12 p-4 my-2 border-2 rounded-md shadow-sm w-52 sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="email"
          id="email"
          placeholder="email"
          {...register("email")}
        />
        {errors.email && errors.email?.message && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="nickname">user name</label>
        <input
          className="h-12 p-4 my-2 border-2 rounded-md shadow-sm w-52 sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          id="nickname"
          placeholder="nickname"
          {...register("nickname")}
        />
        {errors.nickname && errors.nickname?.message && (
          <span className="text-xs text-red-500">
            {errors.nickname.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">password</label>
        <input
          className="h-12 p-4 my-2 border-2 rounded-md shadow-sm w-52 sm:w-80 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="password"
          id="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && errors.password?.message && (
          <span className="text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col mb-10">
        <label className="mb-2 sm:w-80 w-52" htmlFor="role">
          role
        </label>
        <Select
          // @ts-ignore
          onChange={e => (document.getElementById("role").value = e.value)}
          placeholder="choose a role"
          options={rolesOptions.map(role => ({
            label: role.label,
            value: role.value,
          }))}
        />
        {errors.role && errors.role?.message && (
          <span className="text-xs text-red-500">{errors.role.message}</span>
        )}
        <input
          defaultValue="1"
          {...register("role")}
          id="role"
          className="hidden"
          type="text"
        />
      </div>
      <input
        className="p-2 mt-6 font-bold text-white transition-colors bg-blue-500 rounded-md active:bg-blue-600 hover:bg-blue-600 weigth w-52"
        type="submit"
        value="Create user"
      />
    </form>
  );
};
