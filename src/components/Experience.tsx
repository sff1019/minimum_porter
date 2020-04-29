import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import experienceData from '../data/experienceData.json';
import { RootStyles, rootStyles } from './ComponentsRoot.styles';
import { Styles, styles } from './Experience.styles';
import { Event, Timeline } from './Timeline';

interface Props {
  locale: string;
  updateVisibility(visible: boolean): void; updateCurrentContent(value: string): void;
}

class Experience extends React.Component<Props & RootStyles & Styles> {
  render = () => {
    const {
      classes,
      locale,
      updateCurrentContent,
      updateVisibility,
    } = this.props;

    const onChange = (isVisible: boolean) => {
      updateVisibility(isVisible)

      if (isVisible) {
        updateCurrentContent(experienceData.id)
      }
    }

    const getData = (obj: any, key: string) => {
      return obj[key];
    }

    return (
      <div id={experienceData.id} className={classes.contentContainer}>
        <VisibilitySensor onChange={onChange}>
          <Grid container justify='center' spacing={2}>
            <Grid item sm={12} md={8}>
              <Typography className={classes.contentTitle}>
                {getData(experienceData, locale).title}
              </Typography>
              <Typography className={classes.contentSubTitle}>
                {getData(experienceData, locale).work.subtitle}
              </Typography>
              <Timeline>
                {getData(experienceData, locale).work.data.map((data: any, num: number) => (
                  <Event
                    title={data.name + " (" + data.title + ")"}
                    description={data.description}
                    startTime={data.startYear}
                    endTime={data.endYear}
                    key={num}
                  />
                ))}
              </Timeline>
            </Grid>
            <Grid className={classes.sideImageContainer} item sm={12} md={4}>
              <img
                className={classes.sideImage}
                alt={getData(experienceData, locale).work.img.alt}
                src={require('../assets/experience.png')}
              />
            </Grid>
          </Grid>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange}>
          <Grid container justify='center' spacing={2}>
            <Grid item sm={12}>
              <Typography className={classes.contentSubTitle}>
                {getData(experienceData, locale).honor.subtitle}
              </Typography>
              <div className={classes.listContainer}>
                <ul className={classes.list}>
                  {getData(experienceData, locale).honor.data.map((data: any, num: number) => (
                    <li className={classes.honor}>
                      <label className={classes.icon}></label>
                      <div className={classes.listBody}>
                        <Typography className={classes.honorTitle}>
                          {data.name}
                        </Typography>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          </Grid>
        </VisibilitySensor>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  ...rootStyles(theme),
  ...styles(theme),
  }),
  { withTheme: true },
)(Experience);
