import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Artist = () => {
  return (
    <div className="artist">
      <div className="artist__hearder"></div>
      <div className="artist__body"></div>
      <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
    </div>
  );
};

export default Artist;
