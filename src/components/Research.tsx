import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import researchData from '../data/researchData.json';
import { RootStyles, rootStyles } from './ComponentsRoot.styles';
import { Styles, styles } from './Research.styles';

interface Props {
  locale: string;
  updateVisibility(visible: boolean): void;
  updateCurrentContent(value: string): void;
}

class Research extends React.Component<Props & RootStyles & Styles> {
  render = () => {
    const {
      classes,
      locale,
      updateCurrentContent,
      updateVisibility,
    } = this.props;

    const onChange = (isVisible: boolean) => {
      updateVisibility(isVisible);

      if (isVisible) {
        updateCurrentContent(researchData.id);
      }
    };

    const boldText = (num: number, str: string, isBold: string) => {
      if (isBold === 'true') {
        return (<span  key={num}><b>{str}</b>, </span>);
      } else {
        return (<span  key={num}>{str}, </span>);
      }
    };

    const researchList = (dict: any) => {
      if (dict.items === undefined) {
        return (
          <Typography className={classes.researchDescription}>Work in Progress...</Typography>
        );
      } else {
        return (
          <div className={classes.researchDescription}>
            {dict.publications.items.map((data: any, num: number) => (
              <div key={num}>
                <Typography>{data.title}</Typography>
                <Typography>
                {data.authors.map((item: any, itemNum: number) => (
                  boldText(itemNum, item.name, item.isMe)
                ))}
                </Typography>
                <Typography>{data.conference}</Typography>
                <Typography>{data.link}</Typography>
              </div>
            ))}
          </div>
        );
      }
    };

    const getData = (obj: any, key: string) => {
      return obj[key];
    };

    return (
      <div id={researchData.id} className={classes.contentContainer}>
        <Typography className={classes.contentTitle}>
          {getData(researchData, locale).title}
        </Typography>
        <VisibilitySensor onChange={onChange}>
          <div>
            <Typography className={classes.contentSubTitle}>
              {getData(researchData, locale).interests.title}
            </Typography>
            <Typography className={classes.researchDescription}>
              {getData(researchData, locale).interests.description}
            </Typography>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange}>
          <div>
            <Typography className={classes.contentSubTitle}>
              {getData(researchData, locale).publications.title}
            </Typography>
            {researchList(getData(researchData, locale))}
          </div>
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
)(Research);
