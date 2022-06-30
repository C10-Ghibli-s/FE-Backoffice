import { DELETE_ITEM } from "@services/mutations/delete/deleteItem";
import axios from "axios";
import React from "react";



function DeleteElementButton({itemToDelete, id}:{itemToDelete: string, id: number}) {
  const [onDelete, setOnDelete] = React.useState<boolean>(false);
  const handleDeleteElement = ({itemToDelete, id}: {itemToDelete: string, id: number}) => {
      axios.post(
        process.env.API_URL !== undefined ? process.env.API_URL : '',
        DELETE_ITEM({itemToDelete, id}),
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
      .catch(err => 
        console.log(err)
        // setReqStatus({error:{ 
        //   serverError: `${err}`,
        //   errorMessage: "Ups!, something went wrong, try later."
        // }})
      )
  };

  return (
    <React.Fragment>
      {onDelete && <button className="h-12 mx-2 p-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg" onClick={() => handleDeleteElement({itemToDelete, id})}>Delete</button>}
      {!onDelete && 
        <span
          onClick={() => setOnDelete(true)}
          className="absolute w-8 h-8 mx-2 bg-center bg-no-repeat bg-cover cursor-pointer -right-12 bottom-1 bg-trash-icon"
        />
      }
    </React.Fragment>
  );
}

export { DeleteElementButton };
