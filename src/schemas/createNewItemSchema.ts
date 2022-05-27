import * as yup from 'yup';

export const newUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  nickname: yup.string().min(8).max(20).required(),
  role: yup.string().required(),
  facebook: yup.string(),
  twitter: yup.string()
})

export const newTitleSchema = yup.object().shape({
  title: yup.string().required(),
  originalTitle: yup.string().required(),
  romajiTitle: yup.string().required()
})

export const newMovieSchema = yup.object().shape({
  titleId: yup.number().required(),
  releaseDate: yup.string().required(),
  description: yup.string().required(),
  directorsId: yup.array().of(yup.mixed().oneOf([yup.number()])).required(),
  writersIds: yup.array().of(yup.mixed().oneOf([yup.number()])).required(),
  musiciansIds: yup.array().of(yup.mixed().oneOf([yup.number()])).required(),
  duration: yup.number().required(),
  audienceScore: yup.number(),
  linkWiki: yup.string(),
  movieBanner: yup.string()
})

export const newWriterSchema = yup.object().shape({
  name: yup.string()
})

export const newDirectorSchema = yup.object().shape({
  name: yup.string()
})

export const newMusicianSchema = yup.object().shape({
  name: yup.string()
})
