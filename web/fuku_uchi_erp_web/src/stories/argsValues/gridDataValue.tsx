import { GridDataType } from "../../view/component/dataDisplay/gridData/gridData";
const gridDataValue: {
  base: GridDataType[];
  work: GridDataType[];
  welware: GridDataType[];
} = {
  base: [
    { attribute: "誕生日", value: "1994/4/23" },
    { attribute: "住所", value: "愛知県岡崎市向山町" },
    { attribute: "電話", value: "000-0000-0000" },
    { attribute: "緊急連絡先", value: "000-0000-0000" },
    { attribute: "メール", value: "000-0000-0000" },
  ],

  work: [
    { attribute: "所属", value: "000-0000-0000" },
    { attribute: "社員コード", value: "000-0000-0000" },
    { attribute: "勤務形態", value: "000-0000-0000" },
    { attribute: "非常勤出勤曜日", value: "000-0000-0000" },
    { attribute: "職種", value: "000-0000-0000" },
    { attribute: "入社日", value: "000-0000-0000" },
    { attribute: "退社日", value: "000-0000-0000" },
  ],
  welware: [
    { attribute: "扶養者", value: "000-0000-0000" },
    { attribute: "社会保険 記号", value: "000-0000-0000" },
    { attribute: "社会保険 番号", value: "000-0000-0000" },
  ],
};

export default gridDataValue;
