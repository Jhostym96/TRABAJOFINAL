import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../image/Logotipo.png";

const MainLayout = () => {


  const user = JSON.parse(localStorage.getItem("user"))

  console.log(user);


  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#152059" }}
      >
        <div className="container">
          <div>
            <img
              style={{ height: "50px", width: "50px", marginRight: "10px" }}
              src={logo}
              alt=""
            />
            <a className="navbar-brand" href="#">
              <span className="text-success">Aquila tu</span> CANCHA
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "flex-end" }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/landing"}>
                  Home
                </Link>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                < Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>




            </ul>
          </div>
        </div>
      </nav >

      <Outlet />

    {/* FOOTER de aqui */}
    
    {/* Hasta aqui */}
    </div >
  );
};

export default MainLayout;
