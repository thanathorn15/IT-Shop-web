import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartIcon from "../icon";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const btnrole = user?.role || "user";
  console.log(user);
  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="navbar bg-sky-600">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl text-white ">IT Shop</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-semibold text-white ">
              <>
                {btnrole === "ADMIN" ? (
                  <li>
                    <Link to="/adminproduct">Admin</Link>
                  </li>
                ) : (
                  <></>
                )}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Products</Link>
                </li>
                <li>
                  <Link to="/myorder">MyOrder</Link>
                </li>
                <li>
                  <Link  to="/cart">
                    <CartIcon />
                  </Link>
                </li>
                {!user ? (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                ) : (
                  <li>
                    <Link onClick={hdlLogout} to="/login">
                      Logout
                    </Link>
                  </li>
                )}
              </>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
