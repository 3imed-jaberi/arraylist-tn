import ArrayList_Interface from "./Array List - Interface";
declare class ArrayList implements ArrayList_Interface {
    /**
     * @private array of any type you want ..
     */
    private ArrayList;
    /**
     * init the @ArrayList ..
     */
    constructor();
    /**
     * add one value to the @ArrayList ..
     * @param {string|number|object} value : one string or number or object ..
     */
    add(value: string | number | object): void;
    /**
     * add all values to the @ArrayList ..
     * @param { Array<any> } array : array of any type ..
     */
    addAll(array: any[]): void;
    /**
     * delete element with the input index ..
     * @param { number } index : index of the element you want to remove ..
     */
    remove(index: number): void;
    /**
     * remove all elements ( re-init not destroy => [] ) ..
     */
    removeAll(): void;
    /**
     * get the length of the array list ..
     */
    size(): number;
    /**
     * get the value you want with index ..
     * @param { number } index : index of the element you want to get ..
     */
    get(index: number): any;
    /**
     * get all values ..
     */
    getAll(): any;
    /**
     * update the arraylist ..
     * @param { number } index : index of the value you wan to update ..
     * @param { any } value : new value ..
     */
    set(index: number, value: any): void;
    /**
     * check the arraylist : isEmpty or No ..
     */
    isEmpty(): boolean;
    /**
     * check the existence of a value ( isExist ) ..
     * @param { any } value : input value for check the existence ..
     */
    contains(value: any): boolean;
    /**
     * get the first index of input value ..
     * @param { any } value : input value for search ..
     */
    indexOf(value: any): number;
    /**
     * get the last index of input value ..
     * @param { any } value : input value for search ..
     */
    lastIndexOf(value: any): number;
    /**
     * get the number of all input value ..
     * @param { any } value : input value for search ..
     */
    nbrIndex(value: any): number;
    /**
     * basic ASC sort for the arraylist ..
     * @param { Array<any> } table_name : array you want to sort ..
     */
    private sortASC;
    /**
     * sort the arraylist ..
     * @param { string } typeOfSort : type of sort ( the default is ASC but you can use DESC for the inverse ) ..
     */
    sort(typeOfSort?: string): any;
}
export default ArrayList;
