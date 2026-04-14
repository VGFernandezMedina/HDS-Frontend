import { Button } from "react-bootstrap";
import "./AddButton.css";

const AddButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default AddButton;
