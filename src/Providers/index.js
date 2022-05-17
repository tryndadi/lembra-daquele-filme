import React from "react";
import MediasProvider from "./MediasProvider";
import SearchProvider from "./SearchProvider";
import TrailersProvider from "./TrailersProvider";
import CollectionProvider from "./CollectionProvider";
import UserProvider from "./UserProvider";
import CommentaryProvider from "./CommentaryProvider";
import WishListContext from "./WishListProvider";
import InfosModalProvider from "./InfosModalProvider";

const Providers = ({ children }) => {
  return (
    <InfosModalProvider>
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
    </InfosModalProvider>
  );
};

export default Providers;
