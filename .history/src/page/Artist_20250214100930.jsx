import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Artist = () => {
  return (
    <div className="artist">
      <div className="artist__header"></div>
      <div className="artist__body"></div>
      <FontAwesomeIcon
        className="single-item__icon single-item__icon--artist"
        icon={faCirclePlay}
      />
    </div>
  );
};

export default Artist;
