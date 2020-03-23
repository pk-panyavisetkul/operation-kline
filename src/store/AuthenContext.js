import React from "react";

const AuthenContext = React.createContext(true)

export const AuthenProvider = AuthenContext.Provider
export const AuthenConsumer = AuthenContext.Consumer

export default AuthenContext