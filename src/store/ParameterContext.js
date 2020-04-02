import React from "react";

const ParameterContext = React.createContext(true);

export const ParameterProvider = ParameterContext.Provider;
export const ParameterConsumer = ParameterContext.Consumer;

export default ParameterContext;
