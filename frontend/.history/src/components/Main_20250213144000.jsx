import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { musicArray } from "../assets/database/songs";
const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas Populares" items={5} itemsArray={artistArray} />

      <ItemList title="Musicas Populares" items={20} itemsArray={musicArray} />
    </div>
  );
};

export default Main;
