import SongItem from "./SongItem";
const SongList = () => {
  return (
    <div className="song-list">
      <SongItem />
      <SongItem />
      <p className="song-list__more">Ver mais</p>
    </div>
  );
};

export default SongList;
