import { Link } from "react-router-dom";

Link;
const SongList = () => {
  return (
    <Link to="/song/:id" className="song-item">
      SongItem
    </Link>
  );
};

export default SongList;
