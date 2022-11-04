const validator = {
  isValid: function (param) {
    //  Para que me devuelva un array, split me devuelve separados los elementos de una cadena en un array
  let arrayNumeros = param.split('');
  // console.log(arrayNumeros)

  // Revertimos el orden del array
  arrayNumeros.reverse();
  // console.log(arrayNumeros)

  // para iterar en el array y lo convierto en número
  let test = arrayNumeros.map((elemento) => {
    return Number(elemento);
  })
  // console.log(test)

  let findIndex= test.map((elemento,index)=>{
    if (index%2 !=0 ){
      return elemento*2;
    }
    else {
      return elemento
    }

  })
  // console.log(findIndex)

  const initialValue=0
  let sumaTotal= findIndex.reduce((a,b) =>{
     return a + b
  },initialValue)
  // console.log (sumaTotal)

  let resultado =()=>{
    if (sumaTotal %10===0){
     return true
    }
    else {
      return false
    }
  };
  return resultado();
  },


  maskify: function (param) {
    // if (param=" "){
    // alert("Escriba aquí tu número de tarjeta")
    // }
    // else{
      let lastFour= param.slice(-4);
      console.log(lastFour)
      let relleno= lastFour.padStart(param.length,"#");
      console.log(relleno)
    // }
  }
};

export default validator;
