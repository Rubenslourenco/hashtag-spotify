const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="Imagem da musica x"
          />
        </div>
      </div>
      <div className="song__Bar">
        <div className="song__artist-image">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02d50fbb2113e9d82d0677abce"
            alt="Imagem do artista"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Song;
