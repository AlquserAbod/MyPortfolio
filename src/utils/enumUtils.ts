export function convertStringToEnum<T extends object>(
  enumType: T,
  value: string
): T[keyof T] | undefined {
  const enumValues = Object.values(enumType) as unknown as string[];

  if (enumValues.includes(value)) {
    return value as unknown as T[keyof T];
  }

  return undefined;
}
