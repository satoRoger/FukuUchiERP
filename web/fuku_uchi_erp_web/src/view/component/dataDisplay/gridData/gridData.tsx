import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import useStyles from "./gridData.css";

export type GridDataType = {
  attribute: string;
  value: string;
};
const defaultProps: { gridName: string; data: GridDataType[] } = {
  gridName: "名前無し",
  data: [],
};

type Props = typeof defaultProps;

export default function GridData(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        className={classes.gridName}
      >
        {props.gridName}
      </Typography>
      <div className={classes.container}>
        <Grid container>
          {props.data.map((data) => {
            return (
              <Grid container item>
                <Grid item zeroMinWidth className={classes.attribute}>
                  <Typography
                    align="right"
                    className={clsx(classes.text, classes.attributeText)}
                  >
                    {data.attribute}
                  </Typography>
                </Grid>
                <Grid item xs className={classes.value}>
                  <Typography
                    align="left"
                    className={clsx(classes.text, classes.valueText)}
                  >
                    {data.value}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
GridData.defaultProps = defaultProps;
