import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  dividerWidth: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
    width: '2px',
  },
  sideNavContainer: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
    position: 'relative',
  },
});

export type Styles = WithStyles<typeof styles>;
