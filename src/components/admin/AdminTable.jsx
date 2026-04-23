import { Badge, Button } from "react-bootstrap";
import "./AdminTable.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminTable = ({ data, columns, onDelete }) => {
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
              <td key={i}>{col.render ? col.render(item) : item[col.key]}</td>
            ))}
            <td>
              <Link
                className="btn btn-table-admin editar"
                to={`/admin/products/create?id=${item._id}`}
              >
                <BsPencilSquare className="d-flex" />
              </Link>
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
