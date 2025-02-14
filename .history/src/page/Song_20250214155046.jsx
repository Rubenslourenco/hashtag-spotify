import { Link } from "react-router-dom";

import Player from "../components/Player";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <Link>
            <img
              src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
              alt="Imagem da musica x"
            />
          </Link>
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616d00001e02d50fbb2113e9d82d0677abce"
            alt="Imagem do artista"
          />
        </div>

        <Player />

        <div>
          <p className=" song__name">Pra Sempre Com Você - Ao Vivo</p>
          <p>Jorge & Mateus</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
