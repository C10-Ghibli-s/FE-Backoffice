import React, { FC, useState, createContext } from 'react';

const ActiveSessionContext = createContext({}); 

type prop = {
	children: JSX.Element | JSX.Element[]
}

const ActiveSessionProvider = ({children}:prop) => {

	const [ActiveSession, setActiveSession] = useState({})

	return (
		<ActiveSessionContext.Provider value={{}}>
			{children}
		</ActiveSessionContext.Provider>
	);
};
