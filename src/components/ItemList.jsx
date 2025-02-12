import SingleItem from "./SingleItem"; // eslint-disable-next-line react/prop-types
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
          {Array(items)
            .fill()
            .map((currentvalue, index) => (
              <SingleItem key={`${title}-${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
