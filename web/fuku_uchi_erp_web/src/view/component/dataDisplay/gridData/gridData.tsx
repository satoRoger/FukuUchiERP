import {
  Grid,
  InputBase,
  Paper,
  TextField,
  Typography,
  Input,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
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
const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);
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
                  <Grid item className={classes.attribute}>
                    <Typography className={classes.attributeText}>{data.attribute}</Typography>
                  </Grid>
                  <Grid item xs>
                    <div>
                      {props.editable ? (
                        <TextField
                          className={classes.editableText}
                          defaultValue={data.value}
                          fullWidth
                          variant="outlined"
                        />
                      ) : (
                        <TextField
                          defaultValue={data.value}
                          fullWidth
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          className={classes.noHover}
                        />
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
