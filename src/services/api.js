import axios from "axios";

export const tmdbAccess = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjc0YTI0Njk4YjBkNTBmM2Q5NzU3NzFjMzVmZDk2ZSIsInN1YiI6IjYyNzk1MGEwMjNkMjc4MDA2NjA3YzQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NsMzbgMcv6qsM_XJ2n9cKe0A6ZSI5M6XPELM2WrH70w",
  },
});

export const fakeApiAccess = axios.create({
  baseURL: "https://ja-viu-esse-filme.herokuapp.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
