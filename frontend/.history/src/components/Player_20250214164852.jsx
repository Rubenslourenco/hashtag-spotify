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
        <Link to="/song/1">
          <FontAwesomeIcon
            className="player__icon player__icon--back"
            icon={faBackwardStep}
          />
        </Link>
        <Link to="/song/2">
          <FontAwesomeIcon
            className="player__icon player__icon--play"
            icon={faCirclePlay}
          />
        </Link>
        <Link to="/song/3">
          <FontAwesomeIcon
            className="player__icon  player__icon--play"
            icon={faForwardStep}
          />
        </Link>
      </div>
      <div className="player__progress"></div>
      <p>00:00</p>

      <div className="player__bar">
        <div className="player__bar__progress"></div>
      </div>
      <p>02:30</p>
    </div>
  );
};

export default Player;
