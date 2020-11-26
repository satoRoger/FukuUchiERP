import { Box, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import React from "react";
import useStyles from "./userDisplay.css";

const defaultProps: {
  familiyName: string;
  givenName: string;
  imagePath?: string;
} = {
  familiyName: "苗字",
  givenName: "名前",
};

type Props = typeof defaultProps;

export default function UserDisplay(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.avatarGrid}>
          {props.imagePath ? (
            <Avatar src={props.imagePath} className={classes.avatar} />
          ) : (
            <Avatar className={classes.avatar}>{props.familiyName}</Avatar>
          )}
        </Grid>
        <Grid item container xs={6}>
          <Grid item className={classes.fullName}>
            <Typography variant="h3" className={classes.name}>
              {props.familiyName}
            </Typography>

            <Typography variant="h3" className={classes.name}>
              {props.givenName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

UserDisplay.defaultProps = defaultProps;
