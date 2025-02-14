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
          <FontAwesomeIcon className="player__icont" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon className="player__icon" icon={faCirclePlay} />
        <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
      </div>
      <div className="player__bar"></div>
    </div>
  );
};

export default Player;
