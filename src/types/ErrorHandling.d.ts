export type reqResponse = {
  error?: { errorMessage: string, serverError?: string },
  success?: string
} | null;


export type setReqStatusType = {
  setReqStatus: React.Dispatch<SetStateAction<reqResponse>>
}