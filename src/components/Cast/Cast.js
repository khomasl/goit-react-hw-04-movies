import poster_default from '../../images/poster_default.jpg'

export default function Cast({ cast }) {
  const API_path = 'https://image.tmdb.org/t/p/w500/'

  return (
    <ul>
      {cast.cast.map((c) => (
        <li key={c.cast_id}>
          <img
            src={
              c.profile_path ? `${API_path}${c.profile_path}` : poster_default
            }
            alt={c.name}
            width="100"
          />
          <p>{c.name}</p>
          <p>Character: {c.character}</p>
        </li>
      ))}
    </ul>
  )
}
