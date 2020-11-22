import React from "react";
import useStyles from "./dataTable.css";
import { DateTime } from "luxon";
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";

function defaultProps<T>() {
  return {};
}
//const defaultProps: { culumns: Row; data: Data } = { culumns: [], data: [] };

export type CulumnDefine<T> = {
  text: string;
  field: keyof T;
  align?: "left" | "right" | "inherit" | "center" | "justify";
  dataAlign?: "left" | "right" | "inherit" | "center" | "justify";
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
      <TableContainer component={"div"} className={classes.container}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              {props.culumns.map((cell: CulumnDefine<T>) => {
                return (
                  <TableCell align={cell.align} className={classes.head}>
                    {cell.text}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: Row<T>) => {
              return (
                <TableRow>
                  {props.culumns.map((culumn: CulumnDefine<T>) => {
                    return (
                      <TableCell align={culumn.dataAlign}>
                        {row[culumn.field]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
DataTable.defaultProps = defaultProps;
