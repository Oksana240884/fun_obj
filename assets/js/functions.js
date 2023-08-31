/*function isWorkingAgePerson (number) {
    return  number <=16 || number >= 65 ? false: true;
    
} 
const ourAge = isWorkingAgePerson (88);
const ourAge1 = isWorkingAgePerson (4);
const ourAge2 = isWorkingAgePerson (20);
console.log(ourAge, ourAge1, ourAge2);*/



/*function checkMultiplicity(num1, num2) {
    return (num1 / num2) % 1 === 0;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));*/

/*function isNum(a, b, c) {
return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0 ? true : false;
}

console.log(isNum(2, 4, 12));
console.log(isNum(12, 12, 12));*/

/*function sTriangle (a, b, c) {
   let d = (a + b + c) / 2;
  return (Math.sqrt(d * (d - a) * (d - b) * (d - c)))
}
   

console.log(sTriangle(10, 5, 6))
console.log(sTriangle(4, 4, 4))*/

/*function rectangle(a, b){
    return a * b;
}

console.log(rectangle(4, 7));*/

/*const parallelepiped = function area (a, b, c){
    return 2 * (a * b + a * c + c * b)
};

console.log('parallelepiped :>>', parallelepiped(4, 10, 4));*/

/** 

* @param {symbol} r - радіус основи конуса
* @param {symbol} l - образуюча конуса
*/
const konus = function areaKonus (r, l){
    return  Math.PI * r * l
}

console. log(konus(5, 9));
