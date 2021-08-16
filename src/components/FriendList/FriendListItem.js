import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline === true ? css.online : css.offline}></span>
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
