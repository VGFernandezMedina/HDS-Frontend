import "./AddButton.css";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const AddButton = ({ text, onClick }) => {
  return (
    <Link
      className="btn btn-primary"
      to="/admin/products/create"
      onClick={onClick}
    >
      <GoPlus size={24} />
      {text}
    </Link>
  );
};

export default AddButton;
