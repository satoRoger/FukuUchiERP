import BaseDto from "../dataStructure/baseDto";

export default interface TransferToDto {
  transfer: (...parameter: { id: string; val: unknown }[]) => BaseDto;
}
