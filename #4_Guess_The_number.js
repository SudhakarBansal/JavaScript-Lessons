let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;
console.log(a);
while (inp != a) {
  score -= 1;
  inp = prompt("Enter the number : ")
  if (inp == a) {
    console.log("Congrats you have guessed the right number..");
    console.log("you guessed in ", 100 - score, " chances");
  }
  else if (inp > a && inp <= 100) {
    console.log("your guess is greater...");
  }
  else if (inp < a && inp <= 100) {
    console.log("your guess is smaller...");
  }
  else {
    console.log("wrong input...");
  }
}