import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";
import UserProvider from "./UserProvider";
import WishListContext from "./WishListProvider";

const Providers = ({ children }) => {
  return (
    <WishListContext>
      <UserProvider>
        <MediasProvider>
          <SearchProvider>
            <TrailersProvider>
              <CollectionProvider>{children}</CollectionProvider>
            </TrailersProvider>
          </SearchProvider>
        </MediasProvider>
      </UserProvider>
    </WishListContext>
  );
};

export default Providers;
