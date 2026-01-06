 const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
} 

/*class LinkedList {
    constructor (value) {
        this.head = {value : value , next : null} ;
        this.tail = this.head ;
        this.length = 1;
    }

    append (value) {
        const newNode = {value : value , next : null} ;
        this.tail.next = newNode ;
        this.tail = newNode ;
        this.length++ ;
    }

    printList () {
        const list = [];
       let currentNode = this.head;
       while (currentNode !== null) {
          list.push(currentNode.value);
          currentNode = currentNode.next ;
       }
       return list ;
    }

    prepend(value) {
      const newNode = {value : value , next : null};
      newNode.next = this.head ;
      this.head = newNode ;
      this.length++ ;
    }

    insert (index, value) {
        if (index >= this.length) {
            this.append(value);
            return ;
        }
        const newNode = {value : value , next : null};
        const leader = this.traverseToIndex (index-1);
        const holdPointer = leader.next ;
        leader.next = newNode;
        newNode.next = holdPointer ;
    }

    traverseToIndex(index) {
        let counter = 0 ;
        let currentNode = this.head ;
        while (counter < index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }

    findIndexByValue (value) {
         let count = 0;
        let currentNode = this.head ;
        while (currentNode.value !== null) {
            currentNode = currentNode.next;
             count++ ;
            if(currentNode.value === value) {
                return count ;
            }

        }
    }

    remove (value) {
       const indexToRemove = this.findIndexByValue(value);
       const objAtThisIndex = this.traverseToIndex(indexToRemove);
       const holdNextOfElement = objAtThisIndex.next ;
       const objBefore =  this.traverseToIndex(indexToRemove - 1);
       objBefore.next = holdNextOfElement;
       this.length--;
    }

    removeByIndex (index) {
        const objAtThisIndex = this.traverseToIndex(index);
       const holdNextOfElement = objAtThisIndex.next ;
       const objBefore =  this.traverseToIndex(index - 1);
       objBefore.next = holdNextOfElement;
       this.length--;
    }
}

let mylist = new LinkedList (1);
mylist.append(2)*/
/*
mylist.prepend(-11);
mylist.insert(2,3);
mylist.insert(2,77);
mylist.insert(100,100);
mylist.remove(3);
*/
//mylist.append(3);
//console.log(mylist.printList());


//*************************************************************************



   /* reverse () {
        let first = this.head ;
        this.tail = this.head ;
        let second = first.next;


      /*  let temp = second.next;
        second.next = first ;
        first = second ;
        second = temp ;


        temp = second.next;
        second.next = first ;
        first = second;
        second = temp ;

        while (second.next != null) {
          let temp = second.next;
        second.next = first ;
        first = second;
        second = temp 
        }


      /*  second.next = first ;

        this.head.next = null;
        this.head = second ;

    } */

//-------------------------------------------------------------------------------

/*
        class LinkedList {
            constructor (value) {
                this.head = {value : value, next : null};
                this.tail = this.head ;
                this.length = 1;
            }

            append (value) {
                const newNode = {value : value, next : null};
                this.tail.next = newNode ;
                this.tail = newNode ;
                this.length++;
            }

            prepend (value) {
                const newNode = {value : value, next : null};
                newNode.next = this.head ;
                this.head = newNode;

            }

            insert (index, value) {
                const newNode = {value : value, next : null} ;
                const nodeBeforeGivenIndex = this.getNodeByIndex(index-1);
                const nodeAfterGivenIndex = nodeBeforeGivenIndex.next ;
                newNode.next = nodeAfterGivenIndex ;
                nodeBeforeGivenIndex.next = newNode ;
            }

            getNodeByIndex (index) {
                let counter = 0 ;
                let currentNode = this.head ;
                while(counter<index) {
                    currentNode = currentNode.next ;
                    counter++;
                }
                return currentNode;
            }

            printList () {
                let list = [];
                let currentNode = this.head ;
                while(currentNode) {
                    list.push(currentNode.value);
                    currentNode = currentNode.next ;
                }
             return list;
            }

            remove (index) {
                const nodeBefore = this.getNodeByIndex(index-1);
                const nodeAfter = this.getNodeByIndex(index+1);

                nodeBefore.next = nodeAfter;
            }

            reverse () {
                let first = this.head ;
                this.tail = this.head ;
                let second = first.next ;

              while (second.next != null)  {
                let temp = second.next;
                second.next = first ;
                first = second ;
                second = temp ;}
                second.next = first ;


                this.head.next = null ;
                this.head = second ;
            }
        }



//-------------------------------------

const my = new LinkedList (1);
my.append(2);
my.append(3);
my.append(4);
my.reverse();
console.log(my.printList());
*/

//-----------------------------------------------
/*
class Queue {
    constructor () {
      this.first = null;
      this.last = null;
      this.length = 0 ;
    }

    enqueue (value) {
       
        }


    dequeue () {
       
    }


    peek() {
        
    }


}

const my = new Queue();
my.enqueue('joy');
my.enqueue('math');
my.enqueue('pavel');
my.dequeue();
//my.dequeue();
my.dequeue();

console.log(my.peek()); */


//---------------------------

class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 

/* class Tree {
    constructor () {
        this.root = null;
    }

    insert (value) {
       const newNode = new Node(value);

       if (this.root === null) {
        this.root = newNode;
       }
       else{
        let currentNode = this.root;

        while (true) {
            if (value < currentNode.value){
              if(!currentNode.left) { currentNode.left = newNode;
                return;}
              currentNode = currentNode.left;

            }
            else {
               if (!currentNode.right) {currentNode.right = newNode;
                 return ;}
               currentNode = currentNode.right;
            }
        }
       }
    }

    lookUp (value) {
        let currentNode = this.root;

        while (true) {
            if (value === currentNode.value) { return currentNode;}
            else {
                if (value < currentNode.value) {
                    if (!currentNode.left) return null;
                    currentNode = currentNode.left;
                }
                else {
                     if (!currentNode.right) return null;
                    currentNode = currentNode.right;
                }
            }
        }
    }

    remove (value) {
       
       let currentNode = this.root ;

       while (true) {
        if (currentNode.left.value != value || currentNode.right.value != value) {
          if (value < currentNode.value) { currentNode = currentNode.left ;}
            else {currentNode = currentNode.right ;}
       }
       else {
        return ;
       }
       }
    }
}

let obj = new Tree();
obj.insert(1);
obj.insert(0);
obj.insert(2);
obj.insert(4);
obj.insert(6);
obj.remove(6);


console.log(obj);
*/

//-------------------------------------
class Graph {
    constructor () {
        this.numOfNodes = 0 ;
        this.adjacentList = {};
    }

    addVertex (node) {
        this.adjacentList[node] = [];
        this.numOfNodes++;
    }
    
    addEdge (node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
} 

const g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);

g.addEdge(3, 1);
g.addEdge(3, 4);
g.addEdge(4, 2);
g.addEdge(4, 5);
g.addEdge(1, 2);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(6, 5);

console.log(g);