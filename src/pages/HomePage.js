import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import * as movieShelfAPI from '../services/themoviedb-api'
import MoviesList from '../components/MoviesList/MoviesList'

export default function HomePage() {
  const [movies, setMovies] = useState(null)
  const location = useLocation()

  useEffect(() => {
    movieShelfAPI.fetchMovies().then(setMovies)
  }, [])

  return (
    <>
      <h1>Trending today</h1>

      {movies && (
        <MoviesList
          movies={movies}
          location={location}
          label="Go back to Home"
        />
      )}
    </>
  )
}
