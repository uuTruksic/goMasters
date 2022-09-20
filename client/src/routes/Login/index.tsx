import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Header, FormContainer, StyledTextField, CloseIconContainer } from "./styled";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = { email: "", password: "" };

  const handleSubmit = (values: {}) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
        <Form>
          <FormContainer>
            <CloseIconContainer onClick={() => navigate("/")}>
              <CloseIcon fontSize="large" color="secondary" />
            </CloseIconContainer>
            <Header>Login</Header>
            <Field as={StyledTextField} required label="email" type={"email"} name="email" fullWidth></Field>
            <Field as={StyledTextField} required label="password" type={"password"} name="password" fullWidth></Field>
            <Button fullWidth type="submit" variant="contained" color="secondary">
              Confirm
            </Button>
          </FormContainer>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
