import React, { createContext, useContext, useState } from "react";
import { Metascore } from "./Enums";

type Event = React.FormEvent<HTMLInputElement>;
type BuildQuery = (e: Event) => void;

interface ContextProps {
  query: string;
  buildQuery: BuildQuery;
  resetQuery: Function;
}

const QueryContext = createContext<Partial<ContextProps>>({});

export const QueryProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState("");

  const buildQuery = (e: Event) => {
    const { name, value, checked } = e.currentTarget;
    const newQuery = new URLSearchParams(query);

    if (checked) {
      if (name === "Metascore") {
        newQuery.set(name.toLocaleLowerCase(), Metascore[value]);
      } else if (name === "Watched") {
        newQuery.set(
          name.toLocaleLowerCase(),
          value === "Yes" ? "true" : "false"
        );
      } else if (name === "Saved in wishlist") {
        newQuery.set("saved", value === "Yes" ? "true" : "false");
      } else if (name === "Directors") {
        newQuery.set("director", value);
      } else if (name === "Actors") {
        newQuery.set("actor", value);
      } else {
        newQuery.set(name.toLocaleLowerCase(), value);
      }
    } else {
      newQuery.delete(name.toLocaleLowerCase());
    }

    setQuery(decodeURIComponent(newQuery.toString()));
  };

  const resetQuery = () => {
    setQuery("");
  };

  const value: ContextProps = {
    query,
    buildQuery,
    resetQuery,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export const useQuery = () => useContext(QueryContext);
