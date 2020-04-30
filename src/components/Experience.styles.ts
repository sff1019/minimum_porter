import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  listContainer: {
  },
  list: {
    '@media (max-width: 1280px)': {
      width: '80%',
      paddingLeft: '5em',
    },
    '@media (max-width: 600px)': {
      textAlign: 'center',
      paddingLeft: '3em',
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
      padding: '1.1em 1em 0 1em',
    },
    padding: '1em 2em 0 2em',
    position: 'relative',
    top: '-2.075em',
  },
});

export type Styles = WithStyles<typeof styles>;
