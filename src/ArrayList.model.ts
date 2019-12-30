// ################################
// #        ArrayList Model       #
// ################################

interface IArrayList {
  
  add (value:any):void ;
     
  addAll (array:any[]):void;
     
  remove (index:number):void ;
     
  removeAll ():void ;
     
  size ():number ;
     
  get (index:number):any;
     
  getAll ():any ;
     
  set (index:number , value:any):void;
     
  isEmpty ():boolean ;
     
  contains (value:any):boolean;
     
  indexOf (value:any):number;
     
  lastIndexOf (value:any):number;
     
  nbrIndex (value:any):number ;
     
  sort (typeOfSort?:string):any ;
          
};
     
     
export default IArrayList ;