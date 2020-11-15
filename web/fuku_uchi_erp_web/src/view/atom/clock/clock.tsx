import React, { useEffect, useState } from "react";
import useStyles from "./clock.css";
import clsx from "clsx";
import { Paper, Container } from "@material-ui/core";
import { DateTime } from "luxon";

export const defaultProps: {} = {};

type Props = typeof defaultProps;

export default function Clock(props: Props) {
  let timerId: NodeJS.Timeout | undefined = undefined;
  const [time, setTime] = useState(DateTime.local());
  const classes = useStyles();

  useEffect(() => {
    timerId = setInterval(() => {
      setTime(DateTime.local());
    }, 1000);
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);

  return (
    <>
      <div className={classes.clock}>{time.toFormat(`HH:mm:ss`)}</div>
    </>
  );
}
Clock.defaultProps = defaultProps;
