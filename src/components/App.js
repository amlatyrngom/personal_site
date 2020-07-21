import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TopBar from "./TopBar.js"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Icon from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';

import BlockItem from "./BlockItem.js"
import resume from "../files/Resume.pdf"


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  mainText: {
    margin: "3%",
  },
  aboutMe: {
    [theme.breakpoints.up('md')]: {
      position: "sticky",
      top: "20%",
    },
    [theme.breakpoints.down('sm')]: {
      position: "sticky",
      top: "20px",
    },
  },
  emailText: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  linkText: {
    color: theme.palette.primary.main,
  },
  resumeLink: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none"
  }
});

class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div id="MainApp" className={classes.root}>
        <TopBar/>
        <div className={classes.mainText}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} md={5}>
              <div className={classes.aboutMe}>
                <BlockItem id="AAA" large title="About Me">
                  Hello! My name is Amadou.
                  I am a Computer Science student at Carnegie Mellon University.
                  My main areas of interest are Database Systems, Distributed Systems and AI.
                  You can contact me at <span className={classes.emailText}>amlatyrngom [at] protonmail.com</span>
                  <br/><br/>
                  <a href={resume} className={classes.resumeLink}>
                    Resume <Icon path={mdiFilePdfBox} size={1.5}/>
                  </a>
                </BlockItem>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <div>
                <BlockItem large title="Experience Overview">
                  <BlockItem title="Database Systems Research">
                    I work with <a className={classes.linkText} href="https://www.cs.cmu.edu/~pavlo/">Prof. Andy Pavlo</a> on the <a className={classes.linkText} href="https://github.com/cmu-db/terrier">NoisePage</a> system.
                    My main focus is the vectorization/compilation based execution engine.
                  </BlockItem>
                  <BlockItem title="Database Systems TA">
                    I was a teaching assistant for CMU's Database Systems course (15445) in Fall '19. I developed a class project on Volcano-style query execution.
                  </BlockItem>
                  <BlockItem title="Distributed Systems TA">
                    I was a teaching assistant for CMU's Distributed Systems course (15440) in Spring '18, Fall '18 and Spring '19. I was the head TA during Spring '19.
                  </BlockItem>
                  <BlockItem title="Purestorage Intern">
                    I interned for Purestorage during the Summer '18. I worked on optimizing data transfer between Pure Boxes and Amazon S3.
                  </BlockItem>
                  <BlockItem title="Zillow Intern">
                    I interned for Zillow during the summer '17. I was a Web developer for the rentals platform.
                  </BlockItem>
                </BlockItem>
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item md={5}>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
