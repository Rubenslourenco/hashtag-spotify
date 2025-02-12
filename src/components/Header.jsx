import logoSpotify from "../assets/logo/spotify-logo.png";
const Header = () => {
  return (
    <div>
      <img src={logoSpotify} alt="Logo" />

      <a href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
