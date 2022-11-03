import { FC } from "react";
import { Header, Image, SongContainer, Text, TextContainer } from "./style";

interface SongProps {
  image: string;
  header: string;
  text: string;
}

const Song: FC<SongProps> = ({ image, header, text }) => {
  return (
    <SongContainer>
      <Image url={image} />
      <TextContainer>
        <Header>{header}</Header>
        <Text>{text}</Text>
      </TextContainer>
    </SongContainer>
  );
};

export default Song;
