import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to="/song/:id">
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faBackwardStep}
          />
        </Link>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faForwardStep}
        />
      </div>
      <div className="player__bar"></div>
    </div>
  );
};

export default Player;
