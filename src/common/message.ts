export type Message = ErrorMessage;
export type ErrorMessage = typeof errorMessageList[keyof typeof errorMessageList];

export const errorMessageList = {
  FailedSaveToRepository: "failedSaveToRepository",
} as const;
