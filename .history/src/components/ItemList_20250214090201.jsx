import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem"; //

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title}</h2>
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        </div>

        <div className="item-list__container">
          {itemsArray
            // eslint-disable-next-line react/prop-types
            .filter((currentvalue, index) => index < items)
            .map((currObj, index) => (
              <SingleItem
                idPath={idPath}
                {...currObj}
                key={`${title}-${index}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
