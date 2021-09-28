import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  //   // Set state for test response
  //   const [finishedArr, setFinishedArr] = useState([]);

  //   // Post to test final answer
  //   useEffect(() => {
  //     // POST request using axios inside useEffect React hook
  //     Axios.get("/validation", {
  //         headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
  //         mode: "cors",
  //       })
  //         .then(response => setFinishedArr(response.data));
  // }, []);

  // Set state for Movies
  const [movies, setMovies] = useState([]);

  // Set state for Actors
  const [actors, setActors] = useState([]);

  //   useEffect(() => {
  //     Axios.all([
  //       Axios.get("/movies"),
  //       Axios.get("/actors"),
  //       {
  //         headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
  //         mode: "cors",
  //       },
  //     ]).then(
  //       Axios.spread((moviesAPI, actorsAPI) => {
  //         const movies = moviesAPI.data;
  //         setMovies(movies);

  //         const actors = actorsAPI.data;
  //         setActors(actors);
  //       })
  //     );
  //   }, []);

  // GET request for API for Movies
  useEffect(() => {
    async function getMovies() {
      await axios
        .get("/movies", {
          headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
          mode: "cors",
        })
        .then((response) => {
          setMovies(response.data);
        })
        .catch((e) => {
          console.error("axios movies error", e);
        });
    }

    getMovies();

    async function getActors() {
      await axios
        .get("/actors", {
          headers: { "x-chmura-cors": "9cfa0794-b3a8-419d-a83d-04c52ab5cb93" },
          mode: "cors",
        })
        .then((response) => {
          setActors(response.data);
        })
        .catch((e) => {
          console.error("axios actors error", e);
        });
    }

    getActors();
  }, []);

  //   // Get request for API to Actors
  //   useEffect(() => {

  //   }, []);

  return (
    <div className="container">
      <Header />
      <Body movies={movies} actors={actors} />
      <Footer />
    </div>
  );
}

export default App;
