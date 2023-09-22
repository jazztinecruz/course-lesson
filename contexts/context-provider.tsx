"use client";

import { ReactNode, createContext, useState } from "react";

export const Context = createContext<any>(null);

type Props = {
  children: ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <Context.Provider value={{ isSignedIn, setIsSignedIn, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
