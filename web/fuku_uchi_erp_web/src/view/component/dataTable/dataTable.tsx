import React from "react";
import useStyles from "./dataTable.css";
import { DateTime } from "luxon";
import { TableContainer } from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import TableCell from "@material-ui/core/TableCell/TableCell";
import { isObject } from "util";

function defaultProps<T>() {
  return {};
}
//const defaultProps: { culumns: Row; data: Data } = { culumns: [], data: [] };

export type CulumnDefine<T> = {
  text: string;
  field: keyof T;
};
type Row<T> = { [key in keyof T]: string };
type DataTableProps<T> = {
  culumns: CulumnDefine<T>[];
  data: Row<T>[];
};

export default function DataTable<T>(props: DataTableProps<T>) {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        {props.culumns.map((cell: CulumnDefine<T>) => {
          return <TableCell>{cell.text}</TableCell>;
        })}
        {props.data.map((row: Row<T>) => {
          return props.culumns.map((culumn: CulumnDefine<T>) => {
            return <TableCell>{row[culumn.field]}</TableCell>;
          });
        })}
      </TableContainer>
    </>
  );
}
DataTable.defaultProps = defaultProps;
