import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";
import UserProvider from "./UserProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MediasProvider>
        <SearchProvider>
          <TrailersProvider>
            <CollectionProvider>{children}</CollectionProvider>
          </TrailersProvider>
        </SearchProvider>
      </MediasProvider>
    </UserProvider>
  );
};

export default Providers;
