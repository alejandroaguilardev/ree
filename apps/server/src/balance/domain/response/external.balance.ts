export interface EnergyBalanceExternal {
  data: Data;
  included: Included[];
}

export interface Data {
  type: string;
  id: string;
  attributes: DataAttributes;
  meta: Meta;
}

export interface DataAttributes {
  title: string;
  'last-update': Date;
  description: string;
}

export interface Meta {
  'cache-control': CacheControl;
}

export interface CacheControl {
  cache: string;
  expireAt: Date;
}

export interface Included {
  type: string;
  id: ID;
  attributes: IncludedAttributes;
}

export interface IncludedAttributes {
  title: string;
  'last-update': Date;
  description: null | string;
  magnitude: null;
  content: Content[];
}

export interface Content {
  type: string;
  id: string;
  groupId: ID;
  attributes: ContentAttributes;
}

export interface ContentAttributes {
  title: string;
  description: null | string;
  color: string;
  icon: null;
  type: null | string;
  magnitude: null;
  composite: boolean;
  'last-update': Date;
  values: Value[];
  total: number;
  'total-percentage': number;
}

export interface Value {
  value: number;
  percentage: number;
  datetime: Date;
}

export enum ID {
  Almacenamiento = 'Almacenamiento',
  DemandaEnBC = 'Demanda en b.c.',
  NoRenovable = 'No-Renovable',
  Renovable = 'Renovable',
}
