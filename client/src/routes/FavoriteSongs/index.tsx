import { Container, Header, Section, SongsContainer } from "./styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";

import Song from "../../components/Song";
import SongImage1 from "../../assets/songImages/song1.jpg";
import { Button } from "@mui/material";

const FavoriteSongs = () => {
  const [songs, setSongs] = useState<any[]>([]);

  async function getData() {
    const data = await fetch("http://localhost:3000/songs");
    const parsedData = await data.json();
    setSongs(parsedData.songs);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Section>
        <Header>Co práve frčí</Header>
        <SongsContainer>
          <Splide
            options={{
              perPage: 2,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "2rem",
            }}
          >
            {songs.map((song) => (
              <SplideSlide key={song.Name}>
                <Song
                  image={SongImage1}
                  header={song.Name}
                  text={song.Author}
                />
              </SplideSlide>
            ))}
          </Splide>
        </SongsContainer>
      </Section>
    </Container>
  );
};

export default FavoriteSongs;
