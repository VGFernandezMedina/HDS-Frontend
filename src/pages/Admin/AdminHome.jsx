import "./AdminHome.css";

const AdminHome = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="cards-container">
        <div className="card-dashboard">
          <h5>Usuarios</h5>
          <p>120</p>
        </div>

        <div className="card-dashboard">
          <h5>Productos</h5>
          <p>45</p>
        </div>

        <div className="card-dashboard">
          <h5>Ventas</h5>
          <p>$50000</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
