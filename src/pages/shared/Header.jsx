import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log Out Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Error...",
                        text: `${error}`,
                    });
                }
            });
    };
    const navItems = (
        <>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/colleges"
            >
                Colleges
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/admission"
            >
                Admission
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/myCollege"
            >
                My College
            </NavLink>
        </>
    )
    return (
        <div>
            <div className="navbar bg-white shadow-b-sm border-b-2 fixed z-50 md:w-10/12 mx-auto py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="h-8 w-10 md:h-12 md:w-14 mx-auto md:mx-6">
                       <Link to='/'> <img className="h-full w-full" src={logo} /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-7">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end md:mr-7">

                    <div className="ml-5">
                        {user ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <div className="h-7 w-7 mr-3 tooltip tooltip-open tooltip-left tooltip-primary"
                                        data-tip={user.displayName}>
                                    <img
                                        className="h-full w-full rounded-full"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                </div>
                                <button className="btn-primary" onClick={handleLogOut}>
                                    SIGN OUT
                                </button>
                            </div>
                    </>
                    ) : (
                    <>
                        <Link to="/login">
                            <button className="btn-primary">Login</button>
                        </Link>
                    </>
                        )}
                </div>
            </div>
        </div>
        </div >
    );
};

export default Header;