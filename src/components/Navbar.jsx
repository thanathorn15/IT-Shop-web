import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartIcon from "../icon";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">IT Shop</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <>
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
                  <Link to="/cart">
                    <CartIcon />
                  </Link>
                </li>
                {!user ? (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                ) : (
                  <li onClick={hdlLogout}>Logout</li>
                )}
              </>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
