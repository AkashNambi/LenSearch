import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  const getResults = async (type) => {
    setIsLoading(true);
    const result = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "e35f334da6mshe8c2c001cfe632ep16d13cjsnc6933e9460b2",
      },
    });
    const data = await result.json();
    console.log(data);
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
