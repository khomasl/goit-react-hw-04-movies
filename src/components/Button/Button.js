import PropTypes from 'prop-types'
import s from './Button.module.css'

export default function Button({ location, onClick }) {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      {location?.state?.from?.label ?? 'Go back'}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
