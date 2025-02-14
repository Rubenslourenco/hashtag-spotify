import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import Artists from "./page/Artists";
import Artist from "./page/Artist";
import Songs from "./page/Songs";
import Song from "./page/Song";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
