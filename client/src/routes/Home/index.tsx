import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useContext } from "react";
import { MenuContext } from "../../providers/MenuProvider";
import useSWR from "swr";

import Song from "../../components/Song";
import { Container, Header, Section, SongsContainer } from "./styled";

import SongImage1 from "../../assets/songImages/song1.jpg";

const Home = () => {
  const menuStatus = useContext(MenuContext);
  const { data, error } = useSWR("/songs");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading</div>;

  return (
    <>
      <Container closeMenu={menuStatus?.closeMenu}>
        <Section>
          <Header>Co právě frčí</Header>
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
              {data.songs.map((song) => (
                <SplideSlide key={song.Name}>
                  <Song image={SongImage1} header={song.Name} text={song.Author} />
                </SplideSlide>
              ))}
            </Splide>
          </SongsContainer>
        </Section>
      </Container>
    </>
  );
};

export default Home;
