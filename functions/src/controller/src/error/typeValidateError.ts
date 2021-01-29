export default function TypeValidateError(propertyName: string, type: string) {
  return `${propertyName}の型が${type}と一致しません`;
}
