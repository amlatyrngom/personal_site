import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginTop: "15px",
  },
});

function BlockItem(props) {
  const {title, large, children, classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant={large ? "display2" : "display1"}>
        {title}
      </Typography>
      <Typography variant="headline">
        {children}
      </Typography>
    </div>
  );
}


export default withStyles(styles)(BlockItem);
