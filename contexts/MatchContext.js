import React, { createContext, useContext, useState } from 'react';

const MatchContext = createContext();

export const useMatches = () => useContext(MatchContext);

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const addMatch = profile => {
    setMatches(prev => [...prev, profile]);
  };

  return (
    <MatchContext.Provider value={{ matches, addMatch, isSubscribed, setIsSubscribed }}>
      {children}
    </MatchContext.Provider>
  );
};
