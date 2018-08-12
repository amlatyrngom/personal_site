import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import GithubCircle from "mdi-material-ui/GithubCircle"
import Linkedin from "mdi-material-ui/Linkedin"


import img1 from "../images/img1.png"

const styles = theme => ({
  myName: {
    flexGrow: 1,
    marginLeft: "20px",
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      position: "sticky",
    },
    [theme.breakpoints.down('sm')]: {
      position: "static",
    },
  },
  toolBar: {
    [theme.breakpoints.up('sm')]: {
      margin: "0px 5%",
    },
    [theme.breakpoints.up('lg')]: {
      margin: "0px 8%",
    },
  },
});

class TopBar extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img src={img1} alt="Student"/>
          <Typography variant="headline" color="inherit" className={classes.myName}>
            Amadou Ngom
          </Typography>
          <Hidden>
            <IconButton href="https://github.com/amlatyrngom" target="_blank" color="inherit">
                <GithubCircle/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/amadou-ngom-9b8a57111" target="_blank" color="inherit">
                <Linkedin/>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(TopBar);
