// 1. template literals (modern javascript). This is called string interpolation
let boy1 = "Sudhakar";
let boy2 = "Shivam";
console.log(`${boy1} is brother of ${boy2}`); //Sudhakar is brother of Shivam


// 2. string methos
console.log(boy1.toUpperCase());                //SUDHAKAR               toUpperCase()
console.log(boy1.toLowerCase());                //sudhakar               toLowerCase()
console.log(boy1.replace("Sudhakar", "Bansal")) //Bansal                 replace("Sudhakar","Bansal")
console.log(boy1.replace(boy1, boy2))           //Shivam                 replace(boy1,boy2)
console.log(boy2.slice(2, 5));                  //iva                    slice(2,5)
console.log(boy2.slice(2));                     //ivam                   slice(2)
console.log(boy1.concat(" and ", boy2));        //Sudhakar and Shivam    concat()


//quick Quiz (use for loop to print a string...)
str = "Hello_World"
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}