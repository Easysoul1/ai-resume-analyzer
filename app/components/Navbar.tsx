import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">Resunate</p>
            </Link>
            {auth.isAuthenticated ? (
                <div className="flex gap-4">
                    <Link to="/upload" className="primary-button w-fit">
                        Upload Resume
                    </Link>
                    <Link to="/logout" className="primary-button w-fit">
                        <p >Logout</p>
                    </Link>
                </div>
            ) : (
                <Link to="/auth" className="primary-button w-fit">
                    <p>Login</p>
                </Link>
            )}
        </nav>
    )
}
export default Navbar
