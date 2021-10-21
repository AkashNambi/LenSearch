import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

export default function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm}&num=40 videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between  sm:px-56 items-center w-full">
          {results?.map(({ link, title, description }, index) => {
            return (
              <div key={index} className="md:w-1/2 w-full px-2 py-3 ">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <p className="text-sm">{`${description.substring(
                    0,
                    100
                  )}...`}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap sm:justify-center justify-between items-center w-full">
          {results?.map(({ image, link }, index) => {
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 md:p-5"
              >
                <img src={image?.src} alt={link.title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{link.title}</p>
              </a>
            );
          })}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between  sm:px-56 items-center w-full">
          {results?.map(({ links, id, title, source }) => {
            return (
              <div key={id} className="md:w-1/2 w-full px-2 py-3">
                <a href={links?.[0].href} target="_blank" rel="noreferrer">
                  <p className="text-lg  dark:text-blue-300 text-blue-700 hover:underline">
                    {title}
                  </p>
                  <div className="flex gap-4">
                    <a href={source?.href} target="_blank" rel="noreferrer">
                      {source?.href}
                    </a>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/videos":
      return "Videos";
    default:
      return "Error";
  }
}
