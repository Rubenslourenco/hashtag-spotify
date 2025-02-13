import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas Populares"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist/"
      />

      <ItemList
        title="Musicas Populares"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song/"
      />
    </div>
  );
};

export default Main;
