import React from "react";
const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const value = { isOpen, setIsOpen };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
