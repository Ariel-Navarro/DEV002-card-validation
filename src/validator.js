const validator = {
  isValid: function (param) {
    if (param.length == 0) {
      alert("Ingrese su número de tarjeta")
      return false
    }
    else {
      //  Para que me devuelva un array, split me devuelve separados los elementos de una cadena en un array
     let arrayNumeros = param.split("");
    //  console.log(arrayNumeros)
      // Revertimos el orden del array
     arrayNumeros.reverse();
    //  console.log(arrayNumeros)

     // para iterar en el array y lo convierto en número
     let test = arrayNumeros.map((elemento) => {
     return Number(elemento);
     })
    //  console.log(test)

    //  iterando para encontar las posiciones pares y luego multiplicar por 2 el elemento
     let findIndex= test.map((elemento,index)=>{
     if (index % 2 !==0){
      let multiplicando= elemento *=2
      if (multiplicando > 9) {
       return multiplicando -=9
      } else{
        return multiplicando
      }

     }
     else {
      return elemento
     }
     })

    //  .reduce() para sumar todos los números
     const initialValue=0
     let sumaTotal= findIndex.reduce((a,b) =>{
      return a + b
     },initialValue)

    //  para saber si el total de la suma termina en 0 y al dividirlo entre 10 el residuo es 0
     let resultado =()=>{

     if(sumaTotal %10===0){
      return true
     }
     else {
      return false
     }
     };
     return resultado();
    }
  },


  maskify: function (parametro) {
      let lastFour= parametro.slice(-4);
      let relleno= lastFour.padStart(parametro.length,"#");
      return relleno
  }
};

export default validator;
