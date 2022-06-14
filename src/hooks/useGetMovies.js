import axios from "axios";
import { useEffect } from "react";

const myFunction = () => {
    axios.get("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        console.log(response.data);
    });
};

const useGetMovies = () => {
  useEffect(() => {
    myFunction();
  }, []);
};

export { useGetMovies };


