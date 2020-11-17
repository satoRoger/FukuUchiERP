import React from "react";
import useStyles from "./dataTable.css";
import { DateTime } from "luxon";
import DataTable from "./dataTable";

type TimecardRow = {
  date: DateTime;
  inTime: DateTime;
  outTime: DateTime;
};

const defaultProps: { data: TimecardRow[] } = { data: [] };

type Props = typeof defaultProps;

export default function TimecardSimpleTable(props: Props) {
  const culumns = [
    { text: "日付" },
    { text: "出勤時間" },
    { text: "退勤時間" },
  ];
  const classes = useStyles();
  return (
    <>
      <DataTable culumns={culumns} />
    </>
  );
}
TimecardSimpleTable.defaultProps = defaultProps;
