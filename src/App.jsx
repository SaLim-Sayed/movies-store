import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/utils/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  const ar_ulr =
    "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar";
  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(ar_ulr);
    setMovies(res.data.results);
    setpageCount(500);
    console.log(movies);
  };

  //get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(500);
  };

  useEffect(() => {
    getAllMovies();
  }, 
  // eslint-disable-next-line
  []);

  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(500);
    }
  };
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />

<Route path="/movie/:id" element={<MovieDetails />} />
       </Routes>
       </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
