import poster_default from '../../images/poster_default.jpg'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import s from './MovieDetails.module.css'

export default function MovieDetails({ movieInfo, location }) {
  const API_path = 'https://image.tmdb.org/t/p/w500/'
  const poster = movieInfo
    ? `${API_path}${movieInfo.poster_path}`
    : poster_default

  return (
    <>
      <div className={s.movieDetails}>
        <img src={poster} alt="poster" className={s.img} width="250" />
        <div className={s.movieInfo}>
          <h2>
            {movieInfo.original_title} ({movieInfo.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {movieInfo.popularity.toFixed(0)}%</p>
          <h3>Owerview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieInfo.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      <h3>Additional information</h3>
      <AdditionalInfo movieInfo={movieInfo} location={location} />
      <hr />
    </>
  )
}
