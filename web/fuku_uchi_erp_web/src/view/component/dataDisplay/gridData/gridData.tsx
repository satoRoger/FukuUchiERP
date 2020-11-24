import {
  Grid,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import useStyles from "./gridData.css";

export type GridDataType = {
  attribute: string;
  value: string;
};
const defaultProps: {
  gridName: string;
  data: GridDataType[];
  editable?: boolean;
} = {
  gridName: "名前無し",
  data: [],
  editable: false,
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
        <form>
          <Grid container spacing={0}>
            {props.data.map((data) => {
              return (
                <Grid container item>
                  <Grid item>
                    <Paper
                      variant="outlined"
                      square
                      className={classes.attribute}
                    >
                      <Typography
                        align="right"
                        className={clsx(classes.text, classes.attributeText)}
                      >
                        {data.attribute}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper variant="outlined" square>
                      <div className={classes.value}>
                        {props.editable ? (
                          <InputBase
                            className={clsx(classes.text, classes.valueText)}
                            defaultValue={data.value}
                          />
                        ) : (
                          <Typography
                            className={clsx(classes.text, classes.valueText)}
                          >
                            {data.value}
                          </Typography>
                        )}
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </form>
      </div>
    </>
  );
}
GridData.defaultProps = defaultProps;
