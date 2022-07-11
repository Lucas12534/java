//comparaçao implicita
const num = 5;
const texto = "5";

console.log(num == texto, "implicito")//dois igual compara so valor
//explicita
console.log(num === texto, "explicito");//3 iguais comparas os valores e tipos

//typeof
console.log(typeof num);
console.log(typeof texto)

// == só compara valor
// === compara valor e o tipo de dado

//conversão explcita
Number()
String()
// normalmente se usa mais a explicita