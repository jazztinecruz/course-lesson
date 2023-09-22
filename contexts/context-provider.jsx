"use client";

import { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <Context.Provider value={{ isSignedIn, setIsSignedIn, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
