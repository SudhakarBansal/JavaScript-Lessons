//classical way : 
num = [2,32,2,45,57,32]
// for(let i =0; i<num.length;i++)
// {
//     console.log(num[i]);
// }

// // for each loop 
// num.forEach((element) => {      //used to select each element of array
//     console.log(element*element);
// })

// //array.from                    // to convert any datatype to array
// str = "Sudhakar";
// arr = Array.from(str);
// console.log(arr);

// //for ....of                    //Shortcut way to access an array
// for(let i of num){
//     console.log(i);
// }

// //For....in
// for (let i in num) {
//     console.log(i);
// }
// for (let i in num) {
//     console.log(num[i]);
// }

// //map tranversal
// let a = num.map((value,ind,arr2) => {
//     console.log(value,ind,arr2);          //diff between map and for each is ,map creates new array
//     return(value + ind);
// });
// console.log(a);

// // filter
// let a = num.filter((value)=>{               //creates new array after filtering it
//     console.log(value);                 
//     return(value >10 );
// })
// console.log(a);

// Reduce method
// let a = num.reduce((a,b)=>{              // defination from net
//     return(a+b);
// })
// console.log(a);                          //output = 170  (adds all the number in list)