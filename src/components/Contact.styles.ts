import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  contactDescription: {
    '@media (max-width: 1280px)': {
      fontSize: '0.9rem',
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    fontSize: '1rem',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  mailIcon: {
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    fontSize: '1.5rem',
    marginRight: '1rem',
  },
  snsContainer: {
    '@media (max-width: 1280px)': {
      justifyContent: 'center',
    },
    paddingLeft: theme.spacing(2),
  },
  snsIcon: {
    '@media (max-width: 600px)': {
      padding: '1rem',
    },
    fontSize: '1.5rem',
    padding: '1rem 20px 20px 0',
  },
  snsLink: {
    color: 'black'
  },
});

export type Styles = WithStyles<typeof styles>;
