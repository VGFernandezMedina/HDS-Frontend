import "./AddButton.css";
import { Button } from "react-bootstrap";
import { GoPlus } from "react-icons/go";

const AddButton = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      <GoPlus size={24} />
      {text}
    </Button>
  );
};

export default AddButton;
