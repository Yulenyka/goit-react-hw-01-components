import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline && <span className={css.status}>{isOnline}</span>}
      {!isOnline && <span className={css.statusOff}>{isOnline}</span>}
      <img className={css.avatar} src={avatar} alt={name} width='48' />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};