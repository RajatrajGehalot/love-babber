const countValue = document.querySelector("#counter");

const increment = () => {
  //get the value from ui
  let value = parseInt(countValue.innerText);
  //update the value
  value += 1;
  //set the value onto ui
  countValue.innerText = value;
};

console.log("hii");
class LinkedList {
  constructor(value) {
    this.tail = value;
    this.head = value;
    this.length = 1;
  }
}

let LinkedList = new LinkedList(10);
console.log(LinkedList);

const decrement = () => {
  //get the value from ui
  let value2 = parseInt(countValue.innerText);
  //update the value
  value2 -= 1;
  //set the value onto ui
  countValue.innerText = value2;
};
