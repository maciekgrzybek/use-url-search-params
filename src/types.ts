export interface GetOptions {
  parseNumbers?: boolean;
}

export interface GetAllOptions {
  keysOnly?: boolean;
  valuesOnly?: boolean;
}

export interface ArrayOptions {
  arrayType?: 'separator' | 'bracket' | 'indexedBracket';
  separator?: string;
}

export interface AmendOptions {
  search?: string;
  params: object;
  config?: ArrayOptions;
}
