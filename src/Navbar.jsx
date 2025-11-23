import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top  ">
      <div className="container navCon">
        <a className="navbar-brand  fs-1 " href="">
          ISTUDIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#NavbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="NavbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
            <Link to="Header" smooth={true} className="nav nav-link fw-semibold navTitle">
              Header
            </Link>
            <Link to="About" smooth={true} className="nav nav-link fw-semibold navTitle">
              About
            </Link>
            <Link
              to="Services"
              smooth={true}
              className="nav nav-link fw-semibold navTitle"
            >
              Services
            </Link>
            <Link
              to="Projects"
              smooth={true}
              className="nav nav-link fw-semibold navTitle"
            >
              Projects
            </Link>
            <li className="nav nav-item fw-semibold dropdown">
              <a
                href=""
                className=" nav-link dropdown-toggle navTitle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Features</li>
                <li className="dropdown-item">Our Team</li>
                <li className="dropdown-item">Testimonial</li>
                <li className="dropdown-item">404 Page</li>
              </ul>
            </li>

            <Link
              to="Contact"
              smooth={true}
              className="nav nav-link fw-semibold navTitle"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
