import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";

const Providers = ({ children }) => {
  return (
    <MediasProvider>
      <SearchProvider>
        <TrailersProvider>
          <CollectionProvider>{children}</CollectionProvider>;
        </TrailersProvider>
      </SearchProvider>
    </MediasProvider>
  );
};

export default Providers;
