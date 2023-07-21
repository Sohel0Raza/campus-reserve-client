import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png"
const Header = () => {
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
            <div className="navbar bg-[#fafbfb]">
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
                        <img className="h-full w-full" src={logo} />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-7">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end md:mr-7">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;