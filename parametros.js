//parametros de função

              //1  //2
function soma(num1,num2){
  return num1+num2;
}
console.log("===SOMAS===")
console.log(soma(2,2))
console.log(soma(245,20))
console.log(soma(-500,60))

//parametros x argumentos

console.log("==NOMEIDADE==")
function nomeIdade(nome, idade){
  return `meu nome é ${nome} e minha idade é ${idade}`
}
// ordem dos parametros importa
//erradp
console.log(nomeIdade(40, 'juliana'), ' - errado')
//certo
console.log(nomeIdade('juliana', 40), ' - certo' )


console.log("==multiplicação==")
function multiplica(num1=1,num2=1){//valor basico de dois parametros caso esqueça de colocar n da erro
  return num1*num2;
}
console.log(multiplica(10,10), " - multiplicação 10 x 10")
console.log(multiplica(soma(4,5), soma(3,3)), " - multiplicação de duas função soma")
console.log(multiplica(soma(4,5)), " - multiplicação de só um paremetro(o valor basico dos parametros é 1)")
console.log(multiplica(), " - multiplicação de nenhum paremetro(o valor basico dos parametros é 1)")