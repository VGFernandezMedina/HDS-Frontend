import "./AdminTable.css";

const AdminTable = ({ data, columns }) => {
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
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
