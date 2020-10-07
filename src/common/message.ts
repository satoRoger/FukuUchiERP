export type Message = ErrorMessage | SuccessMessage;
export type SuccessMessage = typeof successMessageList[keyof typeof successMessageList];
export type ErrorMessage = typeof errorMessageList[keyof typeof errorMessageList];


export const successMessageList = {
  SampleSuccessMessage: "sampleSuccessMessage",
  SampleSuccessMessage2: "sampleSuccessMessage2",
} as const;

export const errorMessageList = {
  SampleErrorMessage: "sampleErrorMessage",
  SampleErrorMessage2: "sampleErrorMessage2",
} as const;
