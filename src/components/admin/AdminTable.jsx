import { Button } from "react-bootstrap";
import "./AdminTable.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const AdminTable = ({ data, columns, onEdit, onDelete }) => {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col, i) => (
              <td key={i}>{item[col.key]}</td>
            ))}

            <td>
              <Button
                className="btn-table-admin editar"
                onClick={() => onEdit(item)}
              >
                <BsPencilSquare className="d-flex" />
              </Button>
              <Button
                className="btn-table-admin borrar"
                onClick={() => onDelete(item)}
              >
                <FaRegTrashAlt className="d-flex" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
