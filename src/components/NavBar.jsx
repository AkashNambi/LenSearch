import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Links from "./Links";

export default function NavBar(props) {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-lg bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            LenSearch 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => props.setDarkTheme(!props.darkTheme)}
          className="text-lg dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {props.darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
      <Links />
    </div>
  );
}
