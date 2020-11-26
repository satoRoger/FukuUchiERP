import {
  Grid,
  InputBase,
  Paper,
  TextField,
  Typography,
  Input,
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
                  <Grid item 
                      className={classes.attribute}>
                      <Typography
                        align="right"
                        className={classes.text}
                      >
                        {data.attribute}
                      </Typography>
                  </Grid>
                  <Grid item xs>
                    <div>
                      {props.editable ? (
                        <TextField
                          defaultValue={data.value}
                          fullWidth
						  variant="outlined"
                        />
                      ) : (
                          <Typography
                            className={classes.text}
                          >
                            {data.value}
                          </Typography>
                        )}
                    </div>
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
