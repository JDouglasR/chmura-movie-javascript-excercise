import Item from "./Item";

const List = ({ movies, actors }) => {
  let goalArr = [];

  // for each actor in Actors API response
  actors.forEach(() => {
    // object for individual actors
    const goalObject = {
      Name: "",
      KRmovies: [],
      NCmovies: [],
    };

    const newObj = Object.create(goalObject);

    // returns an array of Keanu Reeves movies
    const krMovies = movies.filter((mov) => {
      if (mov.actors.includes(115)) return mov;
    });
    // returns an array of Nicolas Cage movies
    const ncMovies = movies.filter((mov) => {
      if (mov.actors.includes(206)) return mov;
    });

    console.log("krMovies", krMovies);
    console.log("ncMovies", ncMovies);
    //   console.log("goalObject", goalObject);

    // function onlyUnique(value, index, self) {
    //   return self.indexOf(value) === index;
    // }
    // let test = [];
    // for (let i = 0; i < krMovies.length; i++) {
    //   for (let j = 0; j < ncMovies.length; j++) {
    //     if (krMovies[i].actors[i] === ncMovies[j].actors[j]) {
    //       test.push(krMovies[i].actors[i]);
    //     }
    //   }
    // }
    // let test2 = test.filter(onlyUnique);
    // console.log("test2", test2);

    // for each Keanu Reeve movie...
    krMovies.forEach((movie) => {
      if (movie.actors) {
        // push movie title to goalObject
        goalObject.KRmovies.push(movie.title);
      }
      // for each actor in a Keanu Reeve movie...
      movie.actors.forEach((actor) => {
        if (!actor === 115) {
          // push acter to goalObject
          goalObject.Name.push(actor);
        }
      });
    });

    // for each Nicolas Cage movie...
    ncMovies.forEach((movie) => {
      if (!movie.actors === 115) {
        // push movie title to goalObject
        goalObject.NCmovies.push(movie.title);
      }
      // for each actor in a Nicolas Cage movie...
      movie.actors.forEach((actor) => {
        if (!actor === 115) {
          // push acter to goalObject
          goalObject.Name.push(actor);
        }
      });
    });
    // push goalObject to goalArr
    goalArr.push(goalObject);
    console.log("goalArr", goalArr);
  });

  return (
    <>
      <ul>
        <li>
          {actors.map((actor) => (
            <Item key={actor.actorId} actor={actor} />
          ))}
        </li>
        <li>
          {movies.map((movie) => (
            <Item key={movie.movieId} movie={movie} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default List;
