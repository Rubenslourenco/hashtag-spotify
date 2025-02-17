import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
const SingleItem = ({ name, image, artist }) => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do artista ${name}`}
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{artist ? "Artista" : artist}</p>
      </div>
    </div>
  );
};

export default SingleItem;
