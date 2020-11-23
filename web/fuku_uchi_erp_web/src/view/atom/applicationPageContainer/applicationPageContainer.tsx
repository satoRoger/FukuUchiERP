import React from "react";
import useStyles from "./applicationPageContainer.css";
import clsx from "clsx";
import { Box, Paper, Container } from '@material-ui/core';

export const defaultProps: {
  sidebarOpen: boolean;
  children?: React.ReactNode;
} = { sidebarOpen: false };

type Props = typeof defaultProps;

export default function ApplicationPageContainer(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Container
        component={Paper}
        className={clsx(classes.page, {
          [classes.pageShift]: props.sidebarOpen,
        })}
      >
        <>{props.children}</>
      </Container>
    </>
  );
}
ApplicationPageContainer.defaultProps = defaultProps;
