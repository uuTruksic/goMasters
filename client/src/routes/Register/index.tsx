import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Container, Header, FormContainer, StyledTextField, CloseIconContainer } from "./styled";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC<{}> = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = { email: "", password: "", confirmPassword: "" };

  const handleSubmit = (values: {}) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
        <Form>
          <FormContainer>
            <CloseIconContainer onClick={() => navigate("/")}>
              <CloseIcon fontSize="large" color="primary" />
            </CloseIconContainer>
            <Header>Register</Header>
            <Field as={StyledTextField} required label="email" type={"email"} name="email" fullWidth />
            <Field as={StyledTextField} required label="password" type={"password"} name="password" fullWidth />
            <Field as={StyledTextField} required label="confirm password" type={"password"} name="confirmPassword" fullWidth />
            <Button fullWidth type="submit" variant="contained">
              Confirm
            </Button>
          </FormContainer>
        </Form>
      </Formik>
    </Container>
  );
};

export default Register;
