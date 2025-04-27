let result;

// simple if else
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

// ternary operator
result = a + b < 4 ? "Below" : "Over";
let age = prompt("age?", 18);

// else if
if (age < 3) {
  message = "Hi, baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}

// ternary operator (multiple)
let message = age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
console.log(message);
