//handle session - access token
export const getConfig = () => {
  let sessionStatus = window.localStorage.getItem("localActiveSession");
  let activeSession;
  if(sessionStatus != null) {
    activeSession = JSON.parse(sessionStatus);
  }
  const configReq = {
    headers: { Authorization: `Bearer ${activeSession?.access_token}` }
  };
  return configReq;
}