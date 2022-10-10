/* const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  },
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);
console.log(obj2);
 */

/* function recursiva(){
  if()
} */

/*
let numero = 0;
for (let index = 0; index < numeros.length; index++) {
  numero = numeros[index];
  console.log({ index, numero });
}
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recursiva(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNumber = numbersArray[0];
    console.log(firstNumber);
    numbersArray.shift();
    recursiva(numbersArray);
  }
}
