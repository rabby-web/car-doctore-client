import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const NavBar = () => {
  const navLinks = (
    <>
      <li className="text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#FF3811] text-black"
              : "text-[#FF3811] dark:text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#FF3811] text-black"
              : "text-[#FF3811] dark:text-black"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#FF3811] text-black"
              : "text-[#FF3811] dark:text-black"
          }
        >
          My Cart
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#FF3811] text-black"
              : "text-[#FF3811] dark:text-black"
          }
        >
          login
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#FF3811] text-black"
              : "text-[#FF3811] dark:text-black"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-7 h-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="hidden md:flex">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="border-2 px-5 py-2 rounded-md border-[#FF3811] text-xl font-semibold text-[#FF3811]">
            Appointmen
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
