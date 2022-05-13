import CollectionProvider from "./CollectionProvider";
import React from "react";

const Providers = ({ children }) => {
  return <CollectionProvider>{children}</CollectionProvider>;
};

export default Providers;
