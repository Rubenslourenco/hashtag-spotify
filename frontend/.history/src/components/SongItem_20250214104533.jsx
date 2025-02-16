import { Link } from "react-router-dom";

const SongList = () => {
  return (
    <Link to="/song/1" className="song-item">
      <p>1</p>

      <img
        src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
        alt="Imagem da Musica x"
      />

      <p className="song-item__name">Última Saudade - Ao Vivo</p>
    </Link>
  );
};

export default SongList;
