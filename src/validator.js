const validator = {
  isValid: function (creditCardNumber) {
    //  Para que me devuelva un array, split me devuelve separados los elementos de una cadena en un array
  let arrayNumeros = valorNumTarj.split('');
  console.log(arrayNumeros)

  // Revertimos el orden del array
  arrayNumeros.reverse();
  console.log(arrayNumeros)

  // para iterar en el array y lo convierto en número
  let test = arrayNumeros.map((elemento) => {
    return Number(elemento);
  })
  console.log(test)

  let estaSi= test.map((elemento,index)=>{
    if (index%2 !=0 ){
      return elemento*2;
    }
    else {
      return elemento
    }

  })
  console.log(estaSi)

  const initialValue=0
  let sumaTotal= estaSi.reduce((a,b) =>{
     return a + b
  },initialValue)
  console.log (sumaTotal)

  let resultado =()=>{
    if (sumaTotal %10===0){
     return true
    }
    else {
      return false
    }
  };
  resultado();
  }
  mastify: function (creditCardNumber) {
    wwwwwww
  }
};

export default validator;
