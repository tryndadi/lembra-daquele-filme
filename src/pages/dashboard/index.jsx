import React, { useState } from "react";

import logo from "../../assets/img/logo.svg";
import loader from "../../assets/img/loader2.svg";

import { Grid } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { StyleContainer } from "./style";
import { Redirect } from "react-router-dom";

import SearchBar from "../../components/searchBar";
import SidebarMUI from "../../components/Sidebar";
import MoviesSections from "../../components/moviesSlider";

import { useUser } from "../../Providers/UserProvider";
import { useTMDBMedias } from "../../Providers/MediasProvider";

import { useHistory } from "react-router-dom";
import tmdb from "../../services/tmdb";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { isLoading, getMedias } = useTMDBMedias();
  const { isLoggedIn } = useUser();

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("userData");

    history.push("/");
  };

  return isLoggedIn ? (
    <StyleContainer>
      <aside>
        <SidebarMUI
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          handleLogout={handleLogout}
        />
      </aside>

      <div className="cont-geral-dashboard">
        <header>
          <div className="cont-header">
            <div className="menu-img">
              <div className="menu" onClick={() => setOpenSidebar(true)}>
                <HiMenu width={70} />

                <span>Menu</span>
              </div>

              <img
                onClick={() => getMedias(tmdb.getMedia)}
                src={logo}
                alt="logo"
              />
            </div>

            <SearchBar className="cont-search" />
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
                  style={{ maxWidth: "100px" }}
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
