let arr = new Array("Red", "Green", "Blue"); 
console.log(arr);
arr.push("Yellow"); 
console.log(arr); 
arr.unshift("White");
console.log(arr); 
arr.shift();
console.log(arr); 
arr.pop(); 
console.log(arr); 
arr.splice(1, 1, "Black"); 
console.log(arr);
arr.sort();
console.log(arr); 
arr.reverse();
console.log(arr); 
let newArr = arr.concat("Orange");
console.log(newArr); 
console.log(arr); 
let slicedArr = arr.slice(1, 2);
console.log(slicedArr); 
console.log(arr);
delete arr[1];
console.log(arr); 


