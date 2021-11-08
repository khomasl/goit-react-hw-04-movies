import axios from 'axios'
import { notifyError } from '../components/notify'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'de7bae5f5f0124b91214e980e542706d'

const END_POINTS = {
  GET_TRENDING: `${BASE_URL}trending/movie/day`, // список самых популярных фильмов на сегодня для создания коллекции на главной странице.
  SEARCH_MOVIES: `${BASE_URL}search/movie`, // поиск кинофильма по ключевому слову на странице фильмов.
  GET_MOVIE_DETAILS: `${BASE_URL}movie`, // запрос полной информации о фильме для страницы кинофильма.',
}

async function fetchWithErrorHandling(url = '', config = {}) {
  try {
    const result = await axios.get(url, config)
    return await result.data
  } catch (err) {
    return notifyError(err.message)
  }
}

export function fetchMovies() {
  return fetchWithErrorHandling(
    `${END_POINTS.GET_TRENDING}?api_key=${API_KEY}`,
  ).then((data) => data.results)
}

export function fetchMoviesByQuery(query) {
  return fetchWithErrorHandling(
    `${END_POINTS.SEARCH_MOVIES}?api_key=${API_KEY}&query=${query}`,
  ).then((data) => data.results)
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${END_POINTS.GET_MOVIE_DETAILS}/${movieId}?api_key=${API_KEY}`,
  )
}

export function fetchMovieByActors(movieId) {
  return fetchWithErrorHandling(
    `${END_POINTS.GET_MOVIE_DETAILS}/${movieId}/credits?api_key=${API_KEY}`,
  )
}

export function fetchMovieByReviews(movieId) {
  return fetchWithErrorHandling(
    `${END_POINTS.GET_MOVIE_DETAILS}/${movieId}/reviews?api_key=${API_KEY}`,
  )
}
