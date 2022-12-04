import { ChangeEvent, useState } from "react";
import { GetSession } from "../../utils/getSession";
import { useForm } from "../../utils/useForm";
import { Button, Container, FileInput, FileInputImage, Form, Input } from "./styled";

function NewSong() {
  const [viewImage, setViewImage] = useState(String);
  const initialState = {
    name: "",
    author: "",
    genre: "",
    image: null,
  };

  const { onChange, onSubmit, values } = useForm(addSongCallBack, initialState);

  async function addSongCallBack() {
    try {
      const res = await fetch("http://localhost:3000/song/add-song", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "token " + GetSession() },
        body: JSON.stringify(values),
      });

      if (res.status == 200) {
        alert("Písnička byla úspěšně přidána");
      }
    } catch (e) {
      console.log(e);
      return;
    }
  }

  const onImageChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setViewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input name="name" onChange={onChange} type={"text"} placeholder="Název písničky" required />
        <Input name="author" onChange={onChange} type={"text"} placeholder="Jméno autora" required />
        <Input name="genre" onChange={onChange} type={"text"} placeholder="Žánr" required />
        <FileInput name="image" onChange={onImageChange} type={"file"} placeholder="Žánr" />
        {viewImage && <FileInputImage src={viewImage} alt="preview" />}
        <Button type="submit">Potvrdit</Button>
      </Form>
    </Container>
  );
}

export default NewSong;
