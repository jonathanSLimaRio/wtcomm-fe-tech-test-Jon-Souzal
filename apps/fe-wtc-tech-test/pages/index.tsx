import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Facets, QueryProvider } from "@mono-nx-test-with-nextjs/ui";
import Results from "../app/components/results";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: "flex",
      marginTop: 80,
      marginBottom: 40,
    },
    result: {
      display: "grid",
      gridGap: 40,
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gridAutoRows: "max-content",
      width: "100%",
    },
    filters: {
      backgroundColor: "#455A64",
      borderRadius: 20,
      padding: 20,
      width: 232,
      marginRight: 20,
    },
    filtersMobile: {
      backgroundColor: "#455A64",
      borderRadius: 20,
      padding: 20,
      width: "100%",
    },
    button: {
      backgroundColor: "#455A64",
      fontWeight: "bold",
      textAlign: "center",
      color: '#fff',
      height: 42,
      width: "100%",
      borderTop: '1px solid #fff',
      borderRadius: 0,
    },
  })
);

const Home = () => {
  const [mobileFilter, setMobileFilter] = useState<boolean>(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const classes = useStyles();

  return (
    <QueryProvider>
      <Desktop>
        <main className={classes.main}>
          <aside>
            <div className={classes.filters}>
              <Facets />
            </div>
          </aside>
          <section className={classes.result}>
            <Results />
          </section>
        </main>
      </Desktop>
      <Mobile>
        <div>
          <Button
            onClick={() => {
              setMobileFilter(!mobileFilter);
            }}
            className={classes.button}
          >
            {mobileFilter ? "Close filters" : "Open filters"}
          </Button>
        </div>
        <main className={classes.main}>
          {mobileFilter ? (
            <div className={classes.filtersMobile}>
              <Facets />
            </div>
          ) : (
            <section className={classes.result}>
              <Results />
            </section>
          )}
        </main>
      </Mobile>
    </QueryProvider>
  );
};

export default Home;

{
  /* <main className={classes.main}>
          <aside>
            <div className={classes.filters}>
              <Facets />
            </div>
          </aside>
          <section className={classes.result}>
            <Results />
          </section>
        </main> */
}
