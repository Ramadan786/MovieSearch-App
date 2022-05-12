import React from 'react';
import {useEffect, useState} from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from  './MovieCard'


const movie1={
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
}
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const App = ()=> {
  const [movies, setMovies]=useState([])
  const [searchTerm, setSearchTerm]=useState("");
  const searchMovies= async (title)=>{
const response = await fetch(` ${API_URL}&s=${title}`)
const data = await response.json();

setMovies(data.Search)
  }
  useEffect(()=>{
searchMovies('Spiderman')
  },[])
  return(  
 <div>
   <h1>Movie Land</h1>
   <div className='search'>
     <input
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     placeholder="Search for movies" />

<img  src={SearchIcon}  alt="search"
   onClick={()=>searchMovies(searchTerm)} />
   </div>
   {
movies?.length>0
?(
  <div className='container'>
    {
      movies.map((movie)=>(
        <MovieCard  movie1={movie}/> 
      ))
    }
  < MovieCard  movie1={movies}/>
     </div>
):(
  <div className='empty'>
    <h2>No movies found</h2>
  </div>
)

   }
   
  
 </div>
  );



}

export default App;
