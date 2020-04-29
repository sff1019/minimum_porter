import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  listContainer: {
  },
  list: {
    '@media (max-width: 1280px)': {
      width: '80%',
    },
    '@media (max-width: 600px)': {
      paddingLeft: '5.5em',
      width: 'auto',
    },
    listStyle: 'none',
    maxWidth: '90%',
    paddingTop: '1em',
    position: 'relative',
  },
  icon: {
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'block',
    height: '0.8em',
    margin: '0.44em 0.44em 0.44em -0.44em',
    outline: '10px solid white',
    position: 'absolute',
    top: '-1em',
    width: '0.8em',
  },
  honor: {
    '@media (max-width: 600px)': {
      width: '98%',
    },
    position: 'relative',
  },
  honorTitle: {
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  listBody: {
    '@media (max-width: 600px)': {
      padding: '1em 1em 0 1em',
      width: '90%',
    },
    padding: '1em 2em 0 2em',
    position: 'relative',
    top: '-2.075em',
    width: '95%',
  },
});

export type Styles = WithStyles<typeof styles>;
