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
  id?: number,
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
}
// adding producers to movies
export type addPeopleMutation = {
  producers: {
    directorsIds: number[],
    writersIds: number[],
    musiciansIds: number[]
  }
}



// post producer (director/writer/musician)
export type newProducerType = {
  id?: string,
  name: string
}

// update producer (director/writer/musician)
export type updateProducerType = {
  id: number,
  name: string,
  producerRole: string
}

