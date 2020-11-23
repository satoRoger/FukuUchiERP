import { DateTime } from "luxon";
import React from "react";
import DataTable, { CulumnDefine } from "./dataTable";
import useStyles from "./dataTable.css";

type Culumns = {
  date?: DateTime;
  intime?: DateTime;
  outtime?: DateTime;
  inbreak?: DateTime;
  outbreak?: DateTime;
  sum?: DateTime;
};

export type TimecardTableCulumns = Culumns;

type Coordinate = {
  latitude: number;
  longitude: number;
};

type Options = {
  intimeCoodinate?: Coordinate;
  outtimeCoodinate?: Coordinate;
  inbreakCoodinate?: Coordinate;
  outbreakCoodinate?: Coordinate;
};

const defaultProps: {
  data: Culumns[];
  displayCulumns: (keyof Culumns)[];
  options?: Options;
} = { data: [], displayCulumns: [] };

type Props = typeof defaultProps;

export default function TimecardTable(props: Props) {
  const culumns: CulumnDefine<Culumns>[] = [
    { text: "日付", field: "date", align: "center", dataAlign: "center" },
    {
      text: "出勤時間",
      field: "intime",
      align: "center",
      dataAlign: "center",
    },
    {
      text: "退勤時間",
      field: "outtime",
      align: "center",
      dataAlign: "center",
    },
    {
      text: "休憩開始時間",
      field: "inbreak",
      align: "center",
      dataAlign: "center",
    },
    {
      text: "休憩終了時間",
      field: "outbreak",
      align: "center",
      dataAlign: "center",
    },
    {
      text: "総勤務時間",
      field: "sum",
      align: "center",
      dataAlign: "center",
    },
  ];

  const classes = useStyles();
  const data = props.data.map((data) => {
    return {
      date: data.date?.toFormat("MM月dd日"),
      intime: data.intime?.toFormat("HH:mm"),
      outtime: data.outtime?.toFormat("HH:mm"),
      inbreak: data.inbreak?.toFormat("HH:mm"),
      outbreak: data.outbreak?.toFormat("HH:mm"),
      sum: data.sum?.toFormat("HH:mm"),
    };
  });
  return (
    <>
      <DataTable
        culumns={culumns}
        displayCulumns={props.displayCulumns}
        data={data}
      />
    </>
  );
}
TimecardTable.defaultProps = defaultProps;
