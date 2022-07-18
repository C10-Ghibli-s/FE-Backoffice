// post user
export type newUserType = {
  email: string,
  password: string,
  nickname: string,
  role: string,
  facebook?: string,
  twitter?: string,
  status?: string,
}

// for passing user to the query function
export type updateUserForQuery = {
  id: number,
  nickname?: string,
  role?: {
    name: 'USER' | 'ADMIN'
  },
  status?: string,
}

// post title
export type titlesType = {
  id?: number,
  title: string,
  originalTitle: string,
  romajiTitle: string
}
// post data movie
export type newMovieType = {
  status?: string,
  youtube?: string,
  userName: string,
  title: string,
  originalTitle: string,
  romajiTitle?: string,
  releaseDate: string,
  filmDescription: string,
  duration: number,
  audienceScore?: number,
  linkWiki: string,
  movieBanner?: string,
}

// fetch movie data
export type updateMovieTypeFromDB = {
  id: number,
  status?: string,
  youtube?: string,
  userName: string,
  title: {
    title: string,
    originalTitle: string,
    romajiTitle?: string,
  }
  releaseDate: string,
  filmDescription: string,
  duration: number,
  audienceScore?: number,
  linkWiki: string,
  movieBanner: string,
}
// update movie data form types
export type updateMovieType = {
  id: number,
  status?: string,
  youtube?: string,
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




export type addPeopleFromSubmit = {
  movieId: number,
  directorsIds: string,
  writersIds: string,
  musiciansIds: string
}
// adding producers to movies
export type addPeopleForMutation = {
  movieId: number,
  directorsIds: number[],
  writersIds: number[],
  musiciansIds: number[]
}

// type data for mutation request
export type newMovieForMutation = {
  data: newMovieType,
}


// post producer (director/writer/musician)
export type newProducerType = {
  id?: string,
  name: string
  status: string,
}

// update producer (director/writer/musician)
export type updateProducerType = {
  id: number,
  name: string,
  producerRole: string
  status: string,
}

