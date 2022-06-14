//handle session - access token
export const getConfig = () => {
  let sessionStatus = window.localStorage.getItem("localActiveSession");
  let activeSession;
  //if(sessionStatus != null) {
  //  activeSession = JSON.parse(sessionStatus);
  //}
  const configReq = {
    //headers: { Authorization: `Bearer ${activeSession?.access_token}` }
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInN1YiI6NDksImlhdCI6MTY1NTE2NjE3MywiZXhwIjoxNjU2MDMwMTczfQ.jBvE8dLrNQ3yMUBgS31-NCVATtvnIoGI_EnxZ5q0xGA` }
  };
  return configReq;
}