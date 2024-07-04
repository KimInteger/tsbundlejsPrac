import add from './test';
import muliply from './muliply';

console.log(add(1, 3));

console.log(muliply(3, 4));

function addMuliply(a: number, b: number): void {
  const plus = a + b;
  console.log(plus);
}

addMuliply(add(5, 6), muliply(3, 4));
