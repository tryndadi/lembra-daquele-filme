import CollectionProvider from "./CollectionProvider";
import MediasProvider from "./MediasProvider";
import React from "react";

const Providers = ({ children }) => {
  return (
    <MediasProvider>
      <CollectionProvider>{children}</CollectionProvider>;
    </MediasProvider>
  );
};

export default Providers;
