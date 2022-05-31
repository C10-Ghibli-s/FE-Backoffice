import * as yup from 'yup';

export const ValidationSessionForm_schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().min(8).max(20).required(),
});