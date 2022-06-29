// post user
export type newUserType = {
  email: string,
  password: string,
  nickname: string,
  role: string,
  facebook?: string,
  twitter?: string
}
// post title
export type titlesType = {
  id?: number,
  title: string,
  originalTitle: string,
  romajiTitle: string
}
// data movie
export type newMovieType = {
  userName: string,
  title: string,
  originalTitle: string,
  romajiTitle?: string,
  releaseDate: string,
  filmDescription: string,
  duration: number,
  audienceScore?: number,
  linkWiki: string,
  movieBanner: string,
}
// type for data from submit form
export type newMovieFromSubmit  = {
  data: newMovieType,
  producers: {
    directorsIds: string,
    writersIds: string,
    musiciansIds: string
  }
}
// type data for mutation request
export type newMovieForMutation = {
  data: newMovieType,
  producers: {
    directorsIds: number[],
    writersIds: number[],
    musiciansIds: number[]
  }
}


// post producer (director/writer/musician)
export type newProducerType = {
  id?: string,
  name: string,
  producerRole?: string,
}

// get modules
export type getModules ={
  id: number,
  title: string,
  description: string,
  imagen: string
}