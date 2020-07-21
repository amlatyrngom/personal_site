import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';

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
                <Icon path={mdiGithub} size={2} color="black"/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/amadou-ngom-9b8a57111" target="_blank" color="inherit">
                <Icon path={mdiLinkedin} size={2} color="black"/>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(TopBar);
