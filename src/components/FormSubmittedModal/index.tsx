import React, { FC } from "react";
import { useRouter } from 'next/router';

type formFeedback = {
  message: string,
  title: string,
  status: string,
  setFormStatus: any
}

export const FormSubmittedModal: FC<formFeedback> = ({message, title, status, setFormStatus}:formFeedback) => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-stone-800/80">
      <div>
        <h1>{title}</h1>
        <p>{message}</p>
        { status == "successfully" &&<button onClick={() => router.push('/')}> Accept </button>}
        { status == "failed" && <button onClick={() => setFormStatus("editing form")}> Accept </button>}
      </div>
    </div>
  );
};
