import SingleItem from "./SingleItem"; //
import { artistArray } from "../assets/database/artists";
// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items }) => {
  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title}</h2>
          <a className="item-list__link" href="/">
            Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">
          {artistArray
            .filter((currentvalue, index) => index < items)
            .map((currObj, index) => (
              <SingleItem key={`${title}-${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
