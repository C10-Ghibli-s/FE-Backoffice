import axios from 'axios';


export const getProducers = ({setDirectors, setWriters, setMusicians}) => {
  axios.post(
    process.env.API_URL !== undefined ? process.env.API_URL : '',
    {query: `query ShowAllWriters {
      showAllWriters {
        id
        name
      }
      showAllMusicians {
        id
        name
      }
      showAllDirectors {
        id
        name
      }
    }`},
    {
      headers: {
      'Content-Type': 'application/json'
      }
    }
  )
  .then(res => {
    setDirectors(res.data.data.showAllDirectors);
    setWriters(res.data.data.showAllWriters);
    setMusicians(res.data.data.showAllMusicians)
  })
}
