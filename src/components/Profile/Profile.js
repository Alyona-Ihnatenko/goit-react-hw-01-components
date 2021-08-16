// import user from './user.json';
// "name": "Jacques Gluke",
// "tag": "jgluke",
// "location": "Ocho Rios, Jamaica",
// "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
// "stats": {
//   "followers": 5603,
//   "views": 4827,
//   "likes": 1308
// }
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
