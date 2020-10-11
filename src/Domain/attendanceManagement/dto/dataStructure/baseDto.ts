export default interface BaseDto {
  equal: (dto: BaseDto) => boolean;
}
