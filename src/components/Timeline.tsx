import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { Styles, styles } from './Timeline.styles';

interface Props extends WithStyles<typeof styles> {
  title: string;
  description: [string];
  startTime: string;
  endTime: string;
}

const TimelineRaw: React.FC<Styles> = (props) => {
  const { children, classes } = props;
  return (
    <div className={classes.container}>
      <ul className={classes.timeline}>
        {children}
      </ul>
    </div>
  );
};

class EventRaw extends React.Component<Props> {
  render = () => {
    const {
      classes,
      description,
      endTime,
      startTime,
      title,
    } = this.props;

    const dateString = () => {
      if (endTime === '') {
        return (<Typography className={classes.date}>{startTime}</Typography>);
      } else {
        return (<Typography className={classes.date}>{startTime} - {endTime}</Typography>);
      }
    };

    return (
      <li className={classes.event}>
        <label className={classes.icon}></label>
        {dateString()}
        <div className={classes.body}>
          <Typography className={classes.eventTitle}>
            {title}
          </Typography>
          <div className={classes.description}>
            <List className={classes.list}>
            {description.map((item, num) =>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary={item}
                  secondary={null}
                  color="textSecondary"
                  className={classes.listItemText}
                  key={num} />
              </ListItem>
                            )}
            </List>
          </div>
        </div>
      </li>
    );
  }
}

const Event = withStyles(styles)(EventRaw);
const Timeline = withStyles(styles)(TimelineRaw);

export { Event, Timeline };
