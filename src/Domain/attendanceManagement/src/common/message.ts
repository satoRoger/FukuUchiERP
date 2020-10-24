export type Message = ErrorMessage;
export type ErrorMessage = typeof errorMessageList[keyof typeof errorMessageList];

export const errorMessageList = {
  LengthZeroIdIsProhivited: "長さ0のIdは禁止されています",
  RangeOfValueIsInvalid: "入力された値の範囲が不正です",
  ProhiviteAttendanceAfterLeavework:"退勤後に出勤を行うことはできません",
  ProhiviteLeaveworkBeforeAttend:"出勤前に退勤を行うことはできません",
  ProhiviteLeaveworkNeedToEndbreak:"退勤前に休憩を終了する必要があります",
  ProhiviteTakebreakBeforeAttend:"出勤前に休憩開始を行うことはできません",
  ProhiviteTakebreakAfterLeavework:"退勤後に休憩開始を行うことはできません",
  ProhiviteTakebreakAfterEndbreak:"休憩終了後に休憩開始を行うことはできません",
  ProhiviteEndbreakBeforeAttend:"出勤前に休憩終了を行うことはできません",
  ProhiviteEndbreakAfterLeavework:"退勤後に休憩終了を行うことはできません",
  ProhiviteEndbreakBeforeTakebreak:"休憩開始前に休憩終了を行うことはできません",
} as const;
