import SingleItem from "./SingleItem"; //

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items, itemsArray, path }) => {
  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title}</h2>
          <a href={path} className="item-list__link">
            Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">
          {itemsArray
            // eslint-disable-next-line react/prop-types
            .filter((currentvalue, index) => index < items)
            .map((currObj, index) => (
              <SingleItem {...currObj} key={`${title}-${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
