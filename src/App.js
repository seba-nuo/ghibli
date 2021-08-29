import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState([]);
  const [finded, setFinded] = useState(true);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then(setFilms);
  }, []);

  if (films.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      <nav>
        <Search
          films={films}
          updateSearch={setSearch}
          updateFinded={setFinded}
        />
      </nav>
      {finded ? (
        <div className="filmsContainer">
          {search.length > 0
            ? search.map((film) => <Card {...film} key={film.id} />)
            : films.map((film) => <Card {...film} key={film.id} />)}
        </div>
      ) : (
        <h1>We could not find it here</h1>
      )}
    </>
  );
}

export default App;
