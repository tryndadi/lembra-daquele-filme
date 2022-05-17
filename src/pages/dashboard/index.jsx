import React, { useState } from "react";

import logo from "../../assets/img/logo.svg";
import loader from "../../assets/img/loader.gif";

import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { StyleContainer } from "./style";
import { Redirect } from "react-router-dom";

import SearchBar from "../../components/searchBar";
import SidebarMUI from "../../components/Sidebar";
import MoviesSections from "../../components/moviesSlider";

import { useUser } from "../../Providers/UserProvider";
import { useTMDBMedias } from "../../Providers/MediasProvider";

import { useWishList } from "../../Providers/WishListProvider";
import { useCollection } from "../../Providers/CollectionProvider";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { isLoading } = useTMDBMedias();
  const { isLoggedIn } = useUser();

  return isLoggedIn ? (
    <StyleContainer>
      <aside>
        <SidebarMUI openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </aside>

      <div className="cont-geral-dashboard">
        <header>
          <div className="cont-header">
            <div className="menu" onClick={() => setOpenSidebar(true)}>
              <HiMenu width={70} />
            </div>

            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <SearchBar />
          </div>
        </header>

        <main>
          {isLoading ? (
            <Grid
              spacing={1}
              container
              justifyContent="center"
              alignItems="center"
              height="50vh"
            >
              <Grid xs={1} item>
                <img
                  src={loader}
                  width="100%"
                  style={{ maxWidth: "50px" }}
                  alt="loader"
                />
              </Grid>
            </Grid>
          ) : (
            <MoviesSections />
          )}
        </main>
      </div>
    </StyleContainer>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
