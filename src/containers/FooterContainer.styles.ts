import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  footerContainer: {
    height: theme.spacing(7),
    paddingTop: theme.spacing(3),
    position: 'relative',
    textAlign: 'center',
  },
  footerText: {
    bottom: '0',
    color: 'gray',
    fontSize: '0.7rem',
    margin: '0 auto',
  }
});

export type Styles = WithStyles<typeof styles>;
