function apresentar(nome){
  return `meu nome é ${nome}`;
}

//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;

const soma2 = (num1,num2) => num1 + num2;

//arrow function com + de 1 linha de instrução

const somNumerosPequenos = (num1,num2) => {
  if (num1 >10 ||  num2 > 10){
    return 'somente numeros de 1 a 9'

  }else{
    return num1+num2
  }
}
//hoisting arrow function se conporta com expressão pq usa const

//maior ou igual que
//>=
