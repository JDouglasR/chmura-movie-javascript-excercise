import { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  // const actorsAPI = Axios.create({
  //   baseURL:
  //     "https://cors.io/?https://switch-yam-equator.azurewebsites.net/api/actors",
  //   headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
  //   mode: "cors",
  // });

  //   const validateAPI = Axios.create({
  //     baseURL:
  //       "https://cors.io/?https://switch-yam-equator.azurewebsites.net/api/validation",
  //     data: "<results>",
  //     headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
  //     mode: "cors",
  //   });

  // Set state for Movies
  const [movies, setMovies] = useState([
    {
      movieId: 1,
      title: "Movie 1",
      actors: [1, 3, 5],
    },
    {
      movieId: 2,
      title: "Movie 2",
      actors: [2, 3, 4],
    },
    {
      movieId: 3,
      title: "Movie 3",
      actors: [2, 4, 5],
    },
    {
      movieId: 4,
      title: "Movie 4",
      actors: [1, 2, 3],
    },
    {
      movieId: 5,
      title: "Movie 5",
      actors: [1, 2, 4],
    },
  ]);

  // GET request for API for Movies
  useEffect(() => {
    Axios.get("/movies", {
      headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
      mode: "cors",
    })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.error("Here is your error", e);
      });
  }, []);

  // Set state for Actors
  const [actors, setActors] = useState(
    {
      actorId: 1,
      title: "Samuel L Jackson",
    },
    {
      actorId: 2,
      title: "Keanu Reeves",
    },
    {
      actorId: 3,
      title: "Bruce Willis",
    },
    {
      actorId: 4,
      title: "Nicolas Cage",
    },
    {
      actorId: 5,
      title: "Will Smith",
    }
  );

  // Get request for API to Actors
  useEffect(() => {
    Axios.get("/actors", {
      headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
      mode: "cors",
    })
      .then((response) => {
        setActors(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.error("Here is your error", e);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <Body movies={movies} actors={actors} />
      <Footer />
    </div>
  );
}

export default App;
