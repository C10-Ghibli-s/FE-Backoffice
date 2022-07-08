import * as yup from 'yup';

export const newUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required().matches(/^[\w]+[0-9]{3}$/),
  nickname: yup.string().min(8).max(20).required().matches(/^[\w]+$/),
  role: yup.string().required(),
  facebook: yup.string(),
  twitter: yup.string()
})
export const updateUserSchema = yup.object().shape({
  id: yup.number().positive(),
  nickname: yup.string().max(20),
  status: yup.string(),
  role: yup.string(),
})


export const newMovieSchema = yup.object().shape({
  userName: yup.string().required(),
  title: yup.string().required().min(4).matches(/^[\w]+$/),
  originalTitle: yup.string().required(),
  romajiTitle: yup.string(),
  releaseDate: yup.string().required(),
  filmDescription: yup.string().required().min(40).matches(/^[\w]+$/),
  directorsIds: yup.string().required(),
  writersIds: yup.string().required(),
  musiciansIds: yup.string().required(),
  duration: yup.number().positive().required(),
  audienceScore: yup.number().positive(),
  linkWiki: yup.string().required().url(),
  movieBanner: yup.string().required()
})

export const newProducerSchema = yup.object().shape({
  name: yup.string().required().min(4).matches(/^[\w]+$/),
  producerRole: yup.string(),
})
