import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TopBar from "./TopBar.js"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import FilePdfBox from 'mdi-material-ui/FilePdfBox';

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
                  I am a computer science student at Carnegie Mellon University.
                  My main areas of interest are Machine Learning, Distributed Systems and Web Development.
                  You can contact me at <span className={classes.emailText}>amlatyrngom [at] protonmail.com</span>
                  <br/><br/>
                  <a href={resume} className={classes.resumeLink}>
                    Resume <FilePdfBox/>
                  </a>
                </BlockItem>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <div>
                <BlockItem large title="Experience">
                  <BlockItem title="Purestorage Intern">
                    I interned for Purestorage during the 2018 summer. While there, I worked on optimizing data transfer between Pure Boxes and Amazon S3.
                  </BlockItem>
                  <BlockItem title="Zillow Intern">
                    I interned for Zillow during the 2017 summer. While there, I worked as a Web developer for the rentals platform.
                  </BlockItem>
                  <BlockItem title="Distributed Systems TA">
                    I was a teaching assistant for the CMU Distributed Systems course (15440) in the spring of 2018. I will be TAing again in the fall of 2018.
                  </BlockItem>
                  <BlockItem title="Research">
                    I worked with Professor Rashmi Vinayak on exploring techniques to improve EC-Cache, an in memory erasured coded distributed system built on top of the Alluxio Framework.
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
