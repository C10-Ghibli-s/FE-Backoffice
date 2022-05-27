export type newUserType = {
  email: string,
  password: string,
  nickname: string,
  role: string,
  facebook?: string,
  twitter?: string
}

export type newTitleType = {
  title: string,
  originalTitle: string,
  romajiTitle: string
}

export type newMovieType = {
  titleId: number,
  releaseDate: string,
  description: string,
  directorsIds: number[],
  writersIds: number[],
  musiciansIds: number[],
  duration: number,
  audienceScore?: number,
  linkWiki?: string,
  movieBanner?: string
}

export type newWriterType = {
  name: string
}

export type newDirectorType = {
  name: string
}

export type newMusicianType = {
  name: string
}