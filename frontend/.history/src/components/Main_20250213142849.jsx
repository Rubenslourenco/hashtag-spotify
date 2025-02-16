import ItemList from "./ItemList";
const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas Populares" items={5} />

      <ItemList title="Musicas Populares" items={20} />
    </div>
  );
};

export default Main;
