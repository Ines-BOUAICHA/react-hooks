import React, {useState} from 'react'
import MovieList from './components/MovieList'
import Navbarr from './components/Navbar/Navbarr'
import  {MoviesData} from './components/MoviesData' 
import AddMovie from './components/AddMovie/AddMovie'
import './App.css'
const App = () => {
  const [Movies, setMovies] = useState(MoviesData)
  const [name, setName] = useState ("")
  const [ratingSearch, setRatingSearch] = useState(0)
  const Addfilm = (newmovie) => {
    return setMovies([...Movies, newmovie])
  }
  return (
    <div>
      <Navbarr name={name} setName={setName}  ratingSearch={ratingSearch}  setRatingSearch={setRatingSearch}/>
      <div className = "positionadd" style={{alignItems:"center"}}>
        <span>
        <MovieList Movies={Movies} name={name} ratingSearch={ratingSearch}/>
        </span>
        <span> <AddMovie Addfilm={Addfilm}/> </span>
      </div>
    </div>
  );
}
export default App;
