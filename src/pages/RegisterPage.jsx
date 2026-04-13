import { Container } from "react-bootstrap";
import FormC from "../components/form/FormC";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <Container fluid className="container-register">
      <FormC idPage="register" />
    </Container>
  );
};

export default RegisterPage;
