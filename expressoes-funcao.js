//declaração de função
function minhaFuncao(param){
  //bloco de codigo
}

minhaFuncao("parametro")

//espresão de função
const soma = function(num1,num2) {return num1 + num2}//pode ter nome mas n é mto usado
//console.log(soma(1,1))

//diferença principal: HOISTING
//funções e variaveis são "listadas" no topo de arquivo

//assim funciona
console.log(apresentar())
function apresentar(){
  return "ola"
}
//tem q definir a const antes de usar
const soma1 = function(num1,num2){
  return num1+num2
}
console.log(soma(1,1))


