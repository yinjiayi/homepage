import React from "react";
// 第一步，创建 context

export const MyContext = React.createContext()
export const MyContextProvider = MyContext.Provider;
export const MyContextConsumer = MyContext.Consumer;