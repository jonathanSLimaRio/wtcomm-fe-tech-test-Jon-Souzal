import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Facets, QueryProvider } from '@mono-nx-test-with-nextjs/ui';

import Results from '../app/components/results';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: 'flex',
      marginTop: 80,
      marginBottom: 40,
    },
    result: {
      display: 'grid',
      gridGap: 40,
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: 'max-content',
      width: '100%',
    },
    filters: {
      backgroundColor: '#455A64',
      borderRadius: 20,
      padding: 20,
      width: 232,
      marginRight: 20,
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <QueryProvider>
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
    </QueryProvider>
  );
};

export default Home;
