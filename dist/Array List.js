"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayList {
    /**
     * init the @ArrayList ..
     */
    constructor() {
        this.ArrayList = [];
    }
    /**
     * add one value to the @ArrayList ..
     * @param {string|number|object} value : one string or number or object ..
     */
    add(value) {
        this.ArrayList.push(value);
    }
    /**
     * add all values to the @ArrayList ..
     * @param { Array<any> } array : array of any type ..
     */
    addAll(array) {
        array.forEach(element => this.ArrayList.push(element));
    }
    /**
     * delete element with the input index ..
     * @param { number } index : index of the element you want to remove ..
     */
    remove(index) {
        this.ArrayList = this.ArrayList.filter(element => element !== this.ArrayList[index]);
    }
    /**
     * remove all elements ( re-init not destroy => [] ) ..
     */
    removeAll() {
        this.ArrayList = [];
    }
    /**
     * get the length of the array list ..
     */
    size() {
        return this.ArrayList.length;
    }
    /**
     * get the value you want with index ..
     * @param { number } index : index of the element you want to get ..
     */
    get(index) {
        return (index < 0 || index >= this.size()) ? -1 : this.ArrayList[index];
    }
    /**
     * get all values ..
     */
    getAll() {
        return this.ArrayList;
    }
    /**
     * update the arraylist ..
     * @param { number } index : index of the value you wan to update ..
     * @param { any } value : new value ..
     */
    set(index, value) {
        this.ArrayList[index] = value;
    }
    /**
     * check the arraylist : isEmpty or No ..
     */
    isEmpty() {
        return this.ArrayList.length === 0;
    }
    /**
     * check the existence of a value ( isExist ) ..
     * @param { any } value : input value for check the existence ..
     */
    contains(value) {
        return this.ArrayList.filter(element => element === value).length !== 0;
    }
    /**
     * get the first index of input value ..
     * @param { any } value : input value for search ..
     */
    indexOf(value) {
        return this.ArrayList.indexOf(value);
    }
    /**
     * get the last index of input value ..
     * @param { any } value : input value for search ..
     */
    lastIndexOf(value) {
        return this.ArrayList.lastIndexOf(value);
    }
    /**
     * get the number of all input value ..
     * @param { any } value : input value for search ..
     */
    nbrIndex(value) {
        let nb = 0;
        this.ArrayList.forEach(element => {
            if (element === value) {
                nb++;
            }
        });
        return nb;
    }
    /**
     * basic ASC sort for the arraylist ..
     * @param { Array<any> } table_name : array you want to sort ..
     */
    sortASC(table_name) {
        return table_name.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    }
    ;
    /**
     * sort the arraylist ..
     * @param { string } typeOfSort : type of sort ( the default is ASC but you can use DESC for the inverse ) ..
     */
    sort(typeOfSort) {
        if ((typeOfSort === undefined) || (typeOfSort.toLowerCase() === "asc")) {
            this.sortASC(this.ArrayList);
        }
        else if (typeOfSort.toLowerCase() === "desc") {
            this.sortASC(this.ArrayList).reverse();
        }
        else {
            return -1;
        }
    }
}
exports.ArrayList = ArrayList;
