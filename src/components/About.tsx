import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import aboutData from '../data/aboutData.json';
import { Styles, styles } from './About.styles';
import { RootStyles, rootStyles } from './ComponentsRoot.styles';

interface Props {
  locale: string;
}

class About extends React.Component<Props & RootStyles & Styles> {
  render = () => {
    const {
      classes,
      locale,
    } = this.props;

    const getData = (obj: any, key: string) => {
      return obj[key];
    };

    return (
      <Paper className={classes.about} elevation={0}>
        <Grid container className={classes.context}>
          <Grid item xs={12} md={6} className={classes.profileImageContainer}>
            <img
              className={classes.profileImage}
              alt='profile.img'
              src={require('../assets/profile.png')}
            />
          </Grid>
          <Grid item xs={12} md={6} container className={classes.aboutContainer}>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              wrap={'nowrap'}
              className={classes.aboutContextWrapper}
            >
              <div className={classes.aboutContext}>
                <Typography className={classes.title}>{getData(aboutData, locale).title}</Typography>
                <Typography className={classes.role}>
                  {getData(aboutData, locale).role}<br/>{getData(aboutData, locale).subRole}
                </Typography>
                <Grid item container className={classes.snsContainer}>
                  <Grid item>
                    <Link href={getData(aboutData, locale).twitter} className={classes.snsLink} target="_blank" rel="noopener">
                      <FontAwesomeIcon className={classes.snsIcon} icon={faTwitterSquare} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={getData(aboutData, locale).linkdin} className={classes.snsLink} target="_blank" rel="noopener">
                      <FontAwesomeIcon className={classes.snsIcon} icon={faLinkedin} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={getData(aboutData, locale).github} className={classes.snsLink} target="_blank" rel="noopener">
                      <FontAwesomeIcon className={classes.snsIcon} icon={faGithubSquare} />
                    </Link>
                  </Grid>
                </Grid>
                <Grid item>
                  {getData(aboutData, locale).description.split('\n').map((line: string, num: number) =>
                  <Typography className={classes.description} key={num}>
                    {line}
                  </Typography>
                                                        )}
                </Grid>
                <Grid item className={classes.cv}>
                  <Link href='/resume.pdf'>
                    Curriculum Vitae
                  </Link>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles((theme) => ({
  ...rootStyles(theme),
  ...styles(theme),
  }),
  { withTheme: true },
)(About);
