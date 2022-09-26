import { Container, Header, Section, SongsContainer } from "./styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Song from "../../components/Song";
import SongImage1 from "../../assets/songImages/song1.jpg";

const Home = () => {
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
