import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import * as movieShelfAPI from '../services/themoviedb-api'
import Searchbar from '../components/Searchbar/Searchbar'
import MoviesList from '../components/MoviesList/MoviesList'
import { notifyError } from '../components/notify'

export default function MoviesPage() {
  const [movies, setMovies] = useState(null)
  const location = useLocation()
  const history = useHistory()
  const searchParam = new URLSearchParams(location.search).get('query') ?? ''

  const handleHistoryPush = (searchValue) => {
    if (searchValue === '') return
    history.push({
      ...location,
      search: `query=${searchValue}`,
    })
  }

  useEffect(() => {
    if (searchParam === '') return

    movieShelfAPI
      .fetchMoviesByQuery(searchParam)
      .then(setMovies)
      .catch((err) => notifyError(err.massage))
  }, [searchParam])

  return (
    <>
      <Searchbar getSearchValue={handleHistoryPush} />

      {movies && (
        <MoviesList
          movies={movies}
          location={location}
          label="Go back to Movies"
        />
      )}
    </>
  )
}
