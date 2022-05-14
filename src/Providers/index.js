import CollectionProvider from "./CollectionProvider";
import MediasProvider from "./MediasProvider";
import React from "react";
import SearchProvider from "./SearchProvider";

const Providers = ({ children }) => {
  return (
    <SearchProvider>
      <MediasProvider>
        <CollectionProvider>
          {children}
        </CollectionProvider>;
      </MediasProvider>
    </SearchProvider>

  );
};

export default Providers;
