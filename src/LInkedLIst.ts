import { Sorter } from "./sorter"

class Node{
    next:Node |null = null
    constructor(public data:number,){}
}

export class LinkedList extends Sorter{
   head:Node|null=null

   add(data:number):void{
      const node=new Node(data)
      if(!this.head){
        this.head=node
        return
      }

     let tail=this.head
     while(tail.next){
        tail=tail.next
     }

     tail.next=node

   }

   get length():number{
       let len:number=1
       if(!this.head)return 0
       let temp=this.head
       while(temp.next){
        len++;
        temp=temp.next
       }
       return len;
   }

   at(index:number):Node{
      if(!this.head){
        throw new Error("index out of bound")
      }

      let counter=0
      let temp:Node |null=this.head
      while(temp){
        if(counter==index){
            return temp
        }
        counter++;
        temp=temp.next
      }
      throw new Error("index out of bounds")
   }

   compare(leftIndex:number,rightIndex:number):boolean{
       if(!this.head){
        throw new Error("list is empty")
       }

       return this.at(leftIndex).data>this.at(rightIndex).data
   }

   swap(leftIndex:number,rightIndex:number):void{
      let leftNode=this.at(leftIndex)
      let rightNode=this.at(rightIndex)

      const leftHand=leftNode.data
      leftNode.data=rightNode.data
      rightNode.data=leftHand
   }

   print():void{
    if(!this.head){
      return
    }else{
       let node:Node|null=this.head
       while(node){
        console.log(node.data)
        node=node.next
       }
    }
   }
}