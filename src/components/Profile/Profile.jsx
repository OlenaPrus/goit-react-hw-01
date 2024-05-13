import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <div className={css.personalInfo}>
          <img className={css.avatar} src={image} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.value}>{followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.value}>{views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.value}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
