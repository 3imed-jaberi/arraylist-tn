// TODO: 
// - rename this module
// - use nyc over istanbul
// - upgrade ts to latest version
// - run travis ci with more nodejs versions (12 -- 17)
// - setup linter

/*!
 * arraylist-tn
 *
 * Copyright(c) 2019-2021 Imed Jaberi
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
import { IArrayList } from './index.model';

/**
 * Java ArrayList implementation
 *
 * @api public
 */
class ArrayList<T = unknown> implements IArrayList<T> {
  #list: Array<T>;

  constructor() {
    this.#list = [];
  }

  /**
   * add one value to the array list
   */
  public add(value: T): void {
    this.#list.push(value);
  }

  /**
   * add all values to the array list
   */
  public addAll(array: T[]): void {
    array.forEach((element) => this.#list.push(element));
  }

  /**
   * delete element with the input index
   */
  public remove(index: number): void {
    this.#list = this.#list.filter(
      (element) => element !== this.#list[index]
    );
  }

  /**
   * remove all elements
   */
  public removeAll(): void {
    this.#list = [];
  }

  /**
   * get the length of the array list
   */
  public size(): number {
    return this.#list.length;
  }

  /**
   * get the value you want with index
   */
  public get(index: number): T {
    return this.#list[index];
  }

  /**
   * get all values
   */
  public getAll(): T[] {
    return this.#list;
  }

  /**
   * update the array list
   */
  public set(index: number, value: T): void {
    this.#list[index] = value;
  }

  /**
   * check the array list is empty or not
   */
  public isEmpty(): boolean {
    return this.#list.length === 0;
  }

  /**
   * check the existence of a value (isExist)
   */
  public contains(value: T): boolean {
    return this.#list.filter((element) => element === value).length !== 0;
  }

  /**
   * get the first index of input value
   */
  public indexOf(value: T): number {
    return this.#list.indexOf(value);
  }

  /**
   * get the last index of input value
   */
  public lastIndexOf(value: T): number {
    return this.#list.lastIndexOf(value);
  }

  /**
   * get the number of all input value
   */
  public nbrIndex(value: T): number {
    let nb = 0;
    this.#list.forEach((element) => {
      if (element === value) {
        nb++;
      }
    });
    return nb;
  }

  /**
   * basic ASC sort for the array list
   */
  private sortASC(table_name: T[]): T[] {
    return table_name.sort((a: T, b: T) => (a < b ? -1 : a > b ? 1 : 0));
  }

  /**
   * sort the arraylist
   */
  public sort(typeOfSort?: string): T[] {
    const sortedList = this.sortASC(this.#list);
    return typeOfSort?.toLowerCase() === "desc"
      ? sortedList.reverse()
      : sortedList;
  }
}

/**
 * Expose `ArrayList`.
 */
export default ArrayList;

// For CommonJS default export support
module.exports = ArrayList;
module.exports.ArrayList = ArrayList;
module.exports.default = ArrayList;
