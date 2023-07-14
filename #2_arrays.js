// Some common array methods
num = [5, 6, 7, 8, 9]
console.log(num);                // [5, 6, 7, 8, 9]
console.log(num.toString());     // 5, 6, 7, 8, 9       converts to string(.tostring())
console.log(num.length);         // 5
console.log(num.join("-"));      // 5-6-7-8-9           joins a array with seperator.join("-")
console.log(num.pop(), num);     // 9 [5, 6, 7, 8]      9 is a popped element 
console.log(num.push(9), num);   // 5 [5, 6, 7, 8, 9]   return array lenght 5 and 9 is a pushed 
console.log(num.shift(), num);   // 5 [6, 7, 8, 9]      to pop element from begining 
console.log(num.unshift(5), num);// 5 [5, 6, 7, 8, 9]   return array lenght and add elmt at beg 

// some more array methods
num1 = [1, 2, 3, 4, 5];
num2 = [6, 7, 8, 9, 10];
num3 = num1.concat(num2);           // [1,2,3,4,5,6,7,8,9,10]  joins two arrays 
console.lg(num3);

delete num1[0];                       // size remains same
console.log(num1, num1.length);      // [ <1 empty item>, 2, 3, 4, 5 ]  "size = " 5

arr = [1,213,2,34,3,45,456,54,23,24];  
arr.sort();                          // sort accod. to 1st digit -> [1,2,213,23,24,3,34,45,456,54]
console.log(arr);                    // modifies original array

// To sort an array in proper way we have to make a comapre function like ->
let comapare = (a,b) =>{
    return a-b;                // for ascending order
    // return b-a;                // for descending order
}
arr2 = [1,213,2,34,3,45,456,54,23,24]; 
arr2.sort(comapare)
console.log(arr2);

arr3 = [1, 213, 2, 34, 3, 45, 456, 54, 23, 24];     //Reversing a array
arr3.reverse();
console.log(arr3);              //[24, 23, 54, 456, 45, 3, 34, 2, 213, 1] 
