import ItemList from "./ItemList";
import { artistArray, musicArray } from "../assets/database/artists";
const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas Populares" items={5} itemsArray={artistArray} />

      <ItemList title="Musicas Populares" items={20} itemsArray={musicArray} />
    </div>
  );
};

export default Main;
