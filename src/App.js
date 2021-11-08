import './App.css'
import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Loader from './components/Loader/Loader'

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: 'Home Page' */),
)
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: 'Movies Page' */),
)
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: 'Movie Details Page' */
  ),
)

export default function App() {
  return (
    <div className="containerApp">
      <>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/movies">
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </>
    </div>
  )
}
