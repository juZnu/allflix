import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import backend from '../../Variables'

import { Mycontext } from '../../Context/Mycontext'
import MovieCard from "../MovieCard"


export default function Home() {
  const [user,,movies,setMovies] = useContext(Mycontext)
  useEffect(() => {
    axios.get(backend+'movies/',{
      headers:{
        Authorization: `Token ${user.Token}`
      }
    }).then(response => response.data)
    .then(data => setMovies(data))
  },[setMovies, user.Token])


  
  return (
    <>
        <Navbar />
        <div>
         <div>Recently added</div>
          <div>
              {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
        <div>
          <div>Popular Movies</div>
          <div>
              {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
    </>
  )
}
