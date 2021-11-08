import { useState, useEffect, lazy, Suspense } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import * as movieShelfAPI from '../services/themoviedb-api'
import MovieDetails from '../components/MovieDetails/MovieDetails'
import Button from '../components/Button/Button'
import Loader from '../components/Loader/Loader'
import { notifyError } from '../components/notify'

const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export default function MoviesDetailsPage() {
  const { url, path } = useRouteMatch()
  const [movieInfo, setMovieInfo] = useState(null)
  const [cast, setCast] = useState(null)
  const [reviews, setReviews] = useState(null)
  const history = useHistory()
  const location = useLocation()
  const params = useParams()

  useEffect(() => {
    if (!params) return
    movieShelfAPI
      .fetchMovieById(params.movieId)
      .then(setMovieInfo)
      .catch((err) => notifyError(err.massage))
  }, [params])

  useEffect(() => {
    if (!movieInfo) return
    movieShelfAPI
      .fetchMovieByActors(movieInfo.id)
      .then(setCast)
      .catch((err) => notifyError(err.massage))
  }, [movieInfo])

  useEffect(() => {
    if (!movieInfo) return
    movieShelfAPI
      .fetchMovieByReviews(movieInfo.id)
      .then(setReviews)
      .catch((err) => notifyError(err.massage))
  }, [movieInfo])

  const handleClick = () => history.push(location?.state?.from?.location ?? url)

  return (
    <>
      <Button location={location} onClick={handleClick} />

      {movieInfo && <MovieDetails movieInfo={movieInfo} location={location} />}

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={`${path}/cast`}>
            {cast && <Cast cast={cast} />}
          </Route>

          <Route exact path={`${path}/reviews`}>
            {reviews && <Reviews reviews={reviews} />}
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}
