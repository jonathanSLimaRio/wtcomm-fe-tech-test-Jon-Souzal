import React, { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Facets, QueryProvider } from "@mono-nx-test-with-nextjs/ui";
import Results from "../app/components/results";
import Modal from "react-modal";

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
      backgroundColor: "transparent",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      position: "absolute",
      top: 140,
      left: 0,
      width: "100%",
    },
    triangular: {
      height: 0,
      width: 0,
      borderTop: "80px solid #455A64",
    },
    contentModal: {
      width: "100%",
      height: "100%",
    },
  })
);

const Home = () => {
  const [mobileFilter, setMobileFilter] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const closeModal = () => {
    setMobileFilter(false);
  }

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
        <div
          className={classes.triangular}
          style={{
            borderLeft: `${width / 2}px solid transparent`,
            borderRight: `${width / 2}px solid transparent`,
          }}
          onClick={() => {
            setMobileFilter(!mobileFilter);
          }}
        >
          <Button className={classes.button}>
            {mobileFilter ? "Close filters" : "Open filters"}
          </Button>
        </div>
        <main className={classes.main}>
          <Modal
            isOpen={mobileFilter}
            onRequestClose={closeModal}
            className={classes.contentModal}
            contentLabel="Example Modal"
          >
            <div className={classes.filtersMobile}>
              <Facets closeModal={closeModal} />
            </div>
          </Modal>
          <section className={classes.result}>
            <Results />
          </section>
        </main>
      </Mobile>
    </QueryProvider>
  );
};

export default Home;
