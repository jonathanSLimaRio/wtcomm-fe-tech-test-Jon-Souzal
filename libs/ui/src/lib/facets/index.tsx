import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { Button } from "@mono-nx-test-with-nextjs/ui";
import { makeStyles } from "@material-ui/core/styles";

import { useQuery } from "../hooks/useQuery";

const useStyles = makeStyles({
  mainLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  filterCategory: {
    margin: "17px 0",
    maxHeight: 180,
    overflow: "hidden",
  },
  filterLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  filterInput: {
    alignItems: "center",
    display: "flex",
    margin: "0 0 10px 5px",
  },
  checkBox: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    height: 38,
    width: "100%",
  },
});

interface IProps {
  closeModal?: Function;
}

export const Facets = (props: IProps) => {
  const classes = useStyles();
  const { buildQuery, resetQuery } = useQuery();
  const [menuFilter, setMenuFilter] = useState<any>([]);

  const [facets, setFacets] = useState([]);

  const reset = () => {
    resetQuery();
    setMenuFilter([]);
  };

  useEffect(() => {
    const getFacets = async () => {
      const res = await fetch("/api/facets");
      const props = await res.json();

      setFacets(props);
    };

    getFacets();
  }, []);

  useEffect(() => {
    renderFacets();
  }, [facets]);

  useEffect(() => {
    if (menuFilter.length <= 0) {
      renderFacets();
    }
  }, [menuFilter]);

  const renderFacets = () => {
    const filters = [];

    for (const key in facets) {
      for (const filter in Array.isArray(facets[key].filters)
        ? facets[key].filters.filter((e) => e.label != "Number of awards won")
        : facets[key].filters) {
        const categ = [];
        const catLabel =
          facets[key].label === "Movies"
            ? facets[key].filters[filter].label
            : facets[key].label;

        categ.push(<div className={classes.mainLabel}>{catLabel}</div>);

        facets[key].filters[filter].values.map((filter) => {
          categ.push(
            <div className={classes.filterInput}>
              <input
                type="checkbox"
                className={classes.checkBox}
                value={filter.label}
                name={catLabel}
                onChange={(e) => buildQuery(e)}
              />
              <label
                className={classes.filterLabel}
              >{`${filter.label} (${filter.count})`}</label>
            </div>
          );
        });
        filters.push(<div className={classes.filterCategory}>{categ}</div>);
      }
    }

    setMenuFilter(filters);
  };

  return (
    <>
      {props.closeModal && (
        <Button
          style={{ marginBottom: 10 }}
          onClick={() => props.closeModal()}
          className={classes.button}
        >
          Close filters
        </Button>
      )}
      <Button onClick={reset} className={classes.button}>
        Reset filters
      </Button>

      {menuFilter.map((menu) => menu)}
    </>
  );
};
