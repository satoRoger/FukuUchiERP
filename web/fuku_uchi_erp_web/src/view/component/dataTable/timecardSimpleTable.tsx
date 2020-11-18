import React from "react";
import useStyles from "./dataTable.css";
import { DateTime } from "luxon";
import DataTable from "./dataTable";
import { CulumnDefine } from "./dataTable";

type Culumns = {
  date: DateTime;
  inTime: DateTime;
  outTime: DateTime;
};

const defaultProps: { data: Culumns[] } = { data: [] };

type Props = typeof defaultProps;

export default function TimecardSimpleTable(props: Props) {
  const culumns: CulumnDefine<Culumns>[] = [
    { text: "日付", field: "date" },
    { text: "出勤時間", field: "inTime" },
    { text: "退勤時間", field: "outTime" },
  ];

  const classes = useStyles();
  const data = props.data.map((data) => {
    return {
      date: data.date.toString(),
      inTime: data.inTime.toString(),
      outTime: data.outTime.toString(),
    };
  });
  return (
    <>
      <DataTable culumns={culumns} data={data} />
    </>
  );
}
TimecardSimpleTable.defaultProps = defaultProps;
