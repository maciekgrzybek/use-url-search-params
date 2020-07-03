export interface GetAllOptions {
  keysOnly?: boolean;
  valuesOnly?: boolean;
}

export interface ArrayOptions {
  arrayType?: 'separator' | 'bracket' | 'indexedBracket';
  separator?: string;
}
