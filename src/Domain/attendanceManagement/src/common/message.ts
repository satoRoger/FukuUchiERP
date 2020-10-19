export type Message = ErrorMessage;
export type ErrorMessage = typeof errorMessageList[keyof typeof errorMessageList];

export const errorMessageList = {
  LengthZeroIdIsProhivited: "長さ0のIdは禁止されています",
  RangeOfValueIsInvalid: "入力された値の範囲が不正です",
  ProhiviteLeaveworkBeforeAttend:"出勤前に退勤を行うことはできません"
} as const;
