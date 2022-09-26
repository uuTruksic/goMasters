import { Container, Header, Section, SongsContainer } from "./styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";

import Song from "../../components/Song";
import SongImage1 from "../../assets/songImages/song1.jpg";

async function getData() {
  const data = await fetch("http://localhost:3000/songs");
  return await data.json();
}

const Home = () => {
  const songs = getData();

  return (
    <Container>
      <Section>
        <Header>Co práve frčí</Header>
        <SongsContainer>
          <Splide
            options={{
              perPage: 5,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1rem",
            }}
          >
            {songs.length && songs.map(song => (
              <SplideSlide>
                <Song image={SongImage1} header={song.name} text={song.author}>

                </Song>
              </SplideSlide>
            ))}
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
            <SplideSlide>
              <Song
                image={SongImage1}
                header="Plná taška hulení"
                text="Various Artists - Topic"
              ></Song>
            </SplideSlide>
          </Splide>
        </SongsContainer>
      </Section>
    </Container>
  );
};

export default Home;
