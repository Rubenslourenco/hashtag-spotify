/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SongList = ({ image, name, duration, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album"></div>
        <img
          src={image}
          alt={`Imagem da Musica ${name}`}
          className="song-item__image"
        />

        <p className="song-item__name">{name}</p>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongList;
