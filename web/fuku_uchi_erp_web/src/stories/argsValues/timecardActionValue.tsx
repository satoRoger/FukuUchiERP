import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";
import AssignmentReturnOutlinedIcon from "@material-ui/icons/AssignmentReturnOutlined";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";

import { useTheme } from '@material-ui/core/styles';

import { TimecardAction } from "../../view/organism/timecardGadget/timecardGadget";
// const theme = useTheme();

const actions: TimecardAction[] = [
  {
    text: "出勤",
    caption:"8:50に出勤済みです",
    iconOutline: WbSunnyOutlinedIcon,
    iconFilled: WbSunnyIcon,
    filled: false,
    // color: theme.palette.error.main,
    disabled: false,
    disabledCaption:"本日はすでに退勤済みです"
  },
  {
    text: "退勤",
    caption:"17:00に退勤済みです",
    iconOutline: NightsStayOutlinedIcon,
    iconFilled: NightsStayIcon,
    filled: false,
    // color: theme.palette.info.main,
    disabled: true,
    disabledCaption:"まだ出勤をしていません"
  },
  {
    text: "休憩開始",
    caption:"12:00に休憩開始済みです",
    iconOutline: EmojiFoodBeverageOutlinedIcon,
    iconFilled: EmojiFoodBeverageIcon,
    filled: false,
    // color: theme.palette.success.main,
    disabled: false,
    disabledCaption:"本日はすでに退勤済みです"
  },
  {
    text: "休憩終了",
    caption:"13:00に休憩終了済みです",
    iconOutline: AssignmentReturnOutlinedIcon,
    iconFilled: AssignmentReturnIcon,
    filled: false,
    // color: theme.palette.warning.main,
    disabled: true,
    disabledCaption:"まだ休憩を開始していません"
  },
];

export default actions;
