import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <nav>
            <h1>ZenConnect</h1>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="services">Service</Link>
        </nav>
    )
}

export default HeaderComponent