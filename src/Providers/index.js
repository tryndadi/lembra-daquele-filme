import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";

const Providers = ({ children }) => {
  return (
    <SearchProvider>
      <MediasProvider>
        <TrailersProvider>
          <CollectionProvider>{children}</CollectionProvider>;
        </TrailersProvider>
      </MediasProvider>
    </SearchProvider>
  );
};

export default Providers;
