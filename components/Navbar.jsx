import React from "react";
import Link from "next/link";
// import Layout from "./Layout";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Picky Store</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </Link>
              <Link href="/">
                <a className="nav-link">Registro</a>
              </Link>

              <Link href="/">
                <a className="nav-link disabled">Disabled</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
