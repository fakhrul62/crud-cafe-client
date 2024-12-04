import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold my-5"><Link to='/'>CRUD Cafe</Link></h1>
      <div className=" *:bg-gray-900 *:text-white *:px-4 *:py-2 *:rounded *:font-semibold flex items-center gap-5">
        <Link to="/add-coffee"> Add Coffee</Link>
        <Link to="/users"> Users</Link>
        <Link to="/sign-in"> Sign In</Link>
        <Link to="/sign-up"> Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
