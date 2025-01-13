import { Sorter } from "./sorter"
 import { LinkedList } from "./LInkedLIst"
import { CharactersCollection } from "./CharactersCollection"
import { NumbersCollection } from "./NumbersCollection"
 const numbersCollection=new NumbersCollection([-1,34,64,3,786,231212,32,64,-12,56-5645])

numbersCollection.sort()
 console.log(numbersCollection.data)

const characters=new CharactersCollection("Xaayb")
characters.sort()
console.log(characters.data)

const linkedList=new LinkedList()
linkedList.add(10)
linkedList.add(6)
linkedList.add(18)
linkedList.add(19)
linkedList.add(120)
linkedList.sort()
linkedList.print()
