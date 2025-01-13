import { Sorter } from "./sorter"

export class NumbersCollection extends Sorter{

    constructor(public data:number[]){
        super()
    }
    
    get length():number{
        //if we use get keyword means we dont have call the fn with () this get funciton will inturn be converted into a attribute

        return this.data.length
    }

    compare(leftIndex:number,rightIndex:number):boolean{
       return this.data[leftIndex]>this.data[rightIndex]
    }

    swap(leftIndex:number,rightIndex:number):void{
       const leftHand=this.data[leftIndex]
       this.data[leftIndex]=this.data[rightIndex]
       this.data[rightIndex]=leftHand
    }


}

// const collection=new NumbersCollection([1,3,2,23,2323])
// collection.length