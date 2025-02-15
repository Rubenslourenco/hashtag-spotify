import SongItem from "./SongItem";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
const SongList = ({ artistName }) => {
  return (
    <div className="song-list">
      <SongItem />
      <SongItem />
      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};
SongList.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default SongList;
