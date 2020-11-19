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
    { text: "日付", field: "date", align: "center", dataAlign: "center" },
    {
      text: "出勤時間",
      field: "inTime",
      align: "center",
      dataAlign: "center",
    },
    {
      text: "退勤時間",
      field: "outTime",
      align: "center",
      dataAlign: "center",
    },
  ];

  const classes = useStyles();
  const data = props.data.map((data) => {
    return {
      date: data.date.toFormat("MM月dd日"),
      inTime: data.inTime.toFormat("HH:mm"),
      outTime: data.outTime.toFormat("HH:mm"),
    };
  });
  return (
    <>
      <DataTable culumns={culumns} data={data} />
    </>
  );
}
TimecardSimpleTable.defaultProps = defaultProps;
