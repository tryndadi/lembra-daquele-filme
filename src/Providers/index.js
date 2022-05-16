import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";
import UserProvider from "./UserProvider";
import CommentaryProvider from './CommentaryProvider'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CommentaryProvider>
        <MediasProvider>
          <SearchProvider>
            <TrailersProvider>
              <CollectionProvider>{children}</CollectionProvider>;
            </TrailersProvider>
          </SearchProvider>
        </MediasProvider>
      </CommentaryProvider>
    </UserProvider>
  );
};

export default Providers;
