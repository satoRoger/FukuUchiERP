import React from "react";
import useStyles from "./dataTable.css";
import { DateTime } from "luxon";
import { TableContainer } from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import TableCell from "@material-ui/core/TableCell/TableCell";

type Cell = {
  text: string;
  align?: "left" | "right" | "inherit" | "center" | "justify";
};
export type Row = Cell[];
export type Data = Row[];

const defaultProps: { culumns: Row; data: Data } = { culumns: [], data: [] };

type Props = typeof defaultProps;

export default function DataTable(props: Props) {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        {props.culumns.map((cell: Cell) => {
          return <TableCell align={cell.align}>{cell.text}</TableCell>;
        })}
        {props.data.map((row: Row) => {
          return row.map((cell: Cell) => {
            return <TableCell align={cell.align}>{cell.text}</TableCell>;
          });
        })}
      </TableContainer>
    </>
  );
}
DataTable.defaultProps = defaultProps;
