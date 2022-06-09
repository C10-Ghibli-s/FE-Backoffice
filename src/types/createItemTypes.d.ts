// post user
export type newUserType = {
  email: string,
  password: string,
  nickname: string,
  role: number,
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
// post movie
export type newMovieType = {
  userName: string,
  title: string,
  originalTitle: string,
  romajiTitle?: string,
  releaseDate: string,
  filmDescription: string,
  directorsIds: number[],
  writersIds: number[],
  musiciansIds: number[],
  duration: number,
  audienceScore?: number,
  linkWiki: string,
  movieBanner: string
}

// post writer
export type newWriterType = {
  id?: string,
  name: string
}
// post director
export type newDirectorType = {
  id?: string,
  name: string
}
// post musician
export type newMusicianType = {
  id?: string,
  name: string
}