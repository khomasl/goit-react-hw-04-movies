import { NavLink } from 'react-router-dom'
import s from './AdditionalInfo.module.css'

export default function AdditionalInfo({ movieInfo, location }) {
  return (
    <>
      <ul>
        <li key="add-1">
          <NavLink
            to={{
              pathname: `/movies/${movieInfo.id}/cast`,
              state: { from: { location } },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>

        <li key="add-2">
          <NavLink
            to={{
              pathname: `/movies/${movieInfo.id}/reviews`,
              state: { from: { location } },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  )
}
