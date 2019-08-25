
import ArrayList_Interface from "./Array List - Interface";



class ArrayList implements ArrayList_Interface {

    /**
     * @private array of any type you want .. 
     */
    private ArrayList : Array<any> ;

    /**
     * init the @ArrayList ..
     */
    constructor () {
      this.ArrayList = [] ;
    }

    /**
     * add one value to the @ArrayList ..
     * @param {string|number|object} value : one string or number or object .. 
     */
    public add (value:string|number|object):void {
          this.ArrayList.push(value);
    }

    /**
     * add all values to the @ArrayList ..
     * @param { Array<any> } array : array of any type .. 
     */
    public addAll (array:any[]):void {
          array.forEach(element => this.ArrayList.push(element));
    }

    /**
     * delete element with the input index .. 
     * @param { number } index : index of the element you want to remove .. 
     */
    public remove (index:number):void {
          this.ArrayList = this.ArrayList.filter(element => element !== this.ArrayList[index] ) ;
    }

    /**
     * remove all elements ( re-init not destroy => [] ) .. 
     */
    public removeAll ():void {
          this.ArrayList = [] ;
    }

    /**
     * get the length of the array list .. 
     */
    public size ():number {
          return this.ArrayList.length ;
    }

    /**
     * get the value you want with index .. 
     * @param { number } index : index of the element you want to get .. 
     */
    public get (index:number):any {
          return (index < 0 || index >= this.size()) ? -1 : this.ArrayList[index] ;
    }

    /**
     * get all values .. 
     */
    public getAll ():any {
          return this.ArrayList ;
    }

    /**
     * update the arraylist .. 
     * @param { number } index : index of the value you wan to update .. 
     * @param { any } value : new value .. 
     */
    public set (index:number , value:any):void {
          this.ArrayList[index] = value ;
    }

    /**
     * check the arraylist : isEmpty or No .. 
     */
    public isEmpty ():boolean {
          return this.ArrayList.length === 0 ;
    }

    /**
     * check the existence of a value ( isExist ) ..
     * @param { any } value : input value for check the existence .. 
     */
    public contains (value:any):boolean {
          return this.ArrayList.filter(element => element === value).length !== 0 ;                      
    }

    /**
     * get the first index of input value .. 
     * @param { any } value : input value for search .. 
     */
    public indexOf (value:any):number {
          return this.ArrayList.indexOf(value);
    }

    /**
     * get the last index of input value .. 
     * @param { any } value : input value for search .. 
     */
    public lastIndexOf (value:any):number {
          return this.ArrayList.lastIndexOf(value);
    }    

    /**
     * get the number of all input value .. 
     * @param { any } value : input value for search .. 
     */
    public nbrIndex (value:any):number {
            let nb = 0 ;
          this.ArrayList.forEach(element => {
                    if ( element === value ){
                              nb++ ;
                    }
          });

          return nb ;
    }

    /**
     * basic ASC sort for the arraylist .. 
     * @param { Array<any> } table_name : array you want to sort .. 
     */
    private sortASC (table_name:Array<any>):any[] {
          return table_name.sort( (a:any, b:any) => {
 
                    if (a < b) {
                              return -1;
                    }
                    if (a > b) {
                              return 1;
                    }
                    // names must be equal
                    return 0;
          });
      };
    
      /**
       * sort the arraylist .. 
       * @param { string } typeOfSort : type of sort ( the default is ASC but you can use DESC for the inverse ) ..
       */
    public sort (typeOfSort?:string):any {
          if ((typeOfSort === undefined) || (typeOfSort.toLowerCase() === "asc")){
                    this.sortASC(this.ArrayList); 
          }else if (typeOfSort.toLowerCase() === "desc"){
                    this.sortASC(this.ArrayList).reverse();                    
          }else {
                    return -1 ;
          }
    }
}

export default ArrayList;

// For CommonJS default export support 
module.exports = ArrayList;
module.exports.ArrayList = ArrayList;
module.exports.default = ArrayList;