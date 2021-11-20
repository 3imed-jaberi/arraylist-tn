// ################################
// #        ArrayList Model       #
// ################################

export interface IArrayList<T> {
  add(value: T): void;
  addAll(array: T[]): void;
  remove(index: number): void;
  removeAll(): void;
  size(): number;
  get(index: number): T;
  getAll(): T[];
  set(index: number, value: T): void;
  isEmpty(): boolean;
  contains(value: T): boolean;
  indexOf(value: T): number;
  lastIndexOf(value: T): number;
  nbrIndex(value: T): number;
  sort(typeOfSort?: string): T[];
}
