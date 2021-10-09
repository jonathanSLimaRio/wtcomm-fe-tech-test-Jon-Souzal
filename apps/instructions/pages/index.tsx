import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import { Header, Theme } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { Footer } from '@mono-nx-test-with-nextjs/ui';
import Instructions from '../app/components/instructions';
import { ThemeProvider } from '@material-ui/core/styles';
import LINKS from '../../../common/links.json';
const { Application } = LINKS;

const useStyles = makeStyles(() =>
  createStyles({
    contentContainer: {
      padding: '0 27px',
    },
    root: {
      padding: '0',
    },
  })
);

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container className={classes.root}>
        <Header />
        <div className={classes.contentContainer}>
          <Instructions />
        </div>
        <Footer links={[Application]} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
