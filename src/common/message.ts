export type Message = ErrorMessage;
export type ErrorMessage = typeof errorMessageList[keyof typeof errorMessageList];

export const errorMessageList = {
  FailedSaveToRepository: "failedSaveToRepository",
  LengthZeroIdIsProhivited:"長さ0のIdは禁止されています"
} as const;
