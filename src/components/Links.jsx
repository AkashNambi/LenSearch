import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/images", text: "📸 Images" },
  { url: "/news", text: "📰 News" },
  { url: "/videos", text: "🎦 Videos" },
];
export default function Links() {
  return (
    <div className="align-content:center flex justify-center items-center mt-4 w-full">
      {links.map(({ url, text }, index) => {
        return (
          <NavLink
            key={index}
            to={url}
            activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-3 "
            className="m-2"
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
