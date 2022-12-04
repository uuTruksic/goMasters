import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useContext } from "react";
import { MenuContext } from "../../providers/MenuProvider";
import useSWR from "swr";

import Song from "../../components/Song";
import { Container, Header, Section, SongsContainer } from "./styled";

import SongImage1 from "../../assets/songImages/song1.jpg";
import { SongInterface } from "../../interfaces";

const Home = () => {
  const menuStatus = useContext(MenuContext);
  const { data, error } = useSWR<SongInterface[], Error>("/song");
  console.log(data);

  if (error) return <div></div>; //skeletons
  if (!data) return <div></div>;

  return (
    <Container>
      <Section>
        <Header>Rock</Header>
        <SongsContainer>
          <Splide
            style={{ width: "100%" }}
            options={{
              perPage: 5,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1rem",
            }}
          >
            {data.map((song: any, index: number) => (
              <SplideSlide key={index}>
                <Song image={SongImage1} header={song.name} text={song.author} />
              </SplideSlide>
            ))}
          </Splide>
        </SongsContainer>
      </Section>
    </Container>
  );
};

export default Home;
