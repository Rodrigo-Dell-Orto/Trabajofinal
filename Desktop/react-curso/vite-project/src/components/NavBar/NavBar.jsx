import { Link } from "react-router-dom";
import CartWidget from "./CardWidget";

export default function NavBar({ title }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {title}
                </Link>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/category/celular"
                            >
                                Phones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/tablet">
                                Tablets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/computer">
                                Noteboks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                Contacto
                            </Link>
                            {/* <a className="nav-link" href="/contacto">Contacto</a> */}
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CartWidget cartCount={5} />
                    </form>
                </div>
            </div>
        </nav>
    );
}