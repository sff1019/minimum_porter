import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  about: {
    '@media (max-width: 600px)': {
      paddingBottom: theme.spacing(5),
    },
    background: 'none',
    flex: '1',
    position: 'relative',
  },
  aboutContainer: {
    '@media (max-width: 1280px)': {
      height: '50%',
    },
  },
  aboutContext: {
    '@media (max-width: 1280px)': {
      textAlign: 'center',
    },
    '@media (min-width: 1280px)': {
      height: '70%',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  aboutContextWrapper: {
    '@media (max-width: 1280px)': {
      margin: '0 auto',
    },
    maxWidth: '80%',
  },
  context: {
    '@media (min-width: 1280px)': {
      '-webkit-transform': 'translateY(-50%)',
      maxHeight: '100%',
      maxWidth: '80%',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    height: '100%',
  },
  cv: {
    paddingTop: theme.spacing(4),
  },
  description: {
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
    margin: '0',
  },
  profileImage: {
    '@media (max-width: 960px)': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing(5),
      width: '250px',
    },
    '@media (min-width: 960px)': {
      objectFit: 'contain',
      position: 'relative',
      top: '50%',
      width: '50%',
      float: 'right',
      padding: theme.spacing(5),
      transform: 'translateY(-50%)',
    },
  },
  profileImageContainer: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  role: {
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
    color: 'grey',
    marginTop: '10px',
  },
  snsContainer: {
    '@media (max-width: 1280px)': {
      justifyContent: 'center',
    },
  },
  snsIcon: {
    fontSize: '2.5rem',
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(3),
  },
  snsLink: {
    color: 'black'
  },
});

export type Styles = WithStyles<typeof styles>;
