import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";

// eslint-disable-next-line react/prop-types
const Artist = () => {
  const { id } = useParams();
  // console.log(useParams());
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url("https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9")`,
        }}
      >
        <h2 className="artist__title">Jorge & Mateus</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList />
      </div>
      <Link to="/song/:id">
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
