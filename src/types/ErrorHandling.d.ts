export type reqResponse = {
  error?: { errorMessage: string, serverError?: string },
  success?: string
} | null;


export type setReqStatusType = {
  setReqStatus: React.Dispatch<SetStateAction<reqResponse>>
}

export type setReqStatusMovieType= {
  setReqStatus: React.Dispatch<SetStateAction<reqResponse>>,
  setShowCreateItem: React.Dispatch<SetStateAction<string|null>>
}
