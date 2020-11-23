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

export type CulumnDefine<Culumns> = {
  text: string;
  field: keyof Culumns;
  align?: "left" | "right" | "inherit" | "center" | "justify";
  dataAlign?: "left" | "right" | "inherit" | "center" | "justify";
};
type Row<Culumns> = { [key in keyof Culumns]: string };
type DataTableProps<Culumns> = {
  culumns: CulumnDefine<Culumns>[];
  displayCulumns: (keyof Culumns)[];
  data: Row<Culumns>[];
};

export default function DataTable<T>(props: DataTableProps<T>) {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={"div"} className={classes.container}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              {props.displayCulumns.map((culumn) => {
                const displayCulumn = props.culumns.find(
                  (value) => value.field === culumn
                );
                return (
                  <TableCell
                    align={displayCulumn?.align}
                    className={classes.head}
                  >
                    {displayCulumn?.text}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: Row<T>) => {
              return (
                <TableRow>
                  {props.displayCulumns.map((culumn) => {
                    const displayCulumn = props.culumns.find(
                      (value) => value.field === culumn
                    );
                    return (
                      <TableCell
                        align={displayCulumn?.dataAlign}
                      >
                        {row[culumn]}
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
