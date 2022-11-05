const validator = {
  isValid: function (param) {
    //  Para que me devuelva un array, split me devuelve separados los elementos de una cadena en un array
  //  let arrayNumeros = param.split('');
  //  console.log(arrayNumeros)


    if (param.length == 0) {
      alert("Ingrese su número de tarjeta")
    }
    else {
      //  Para que me devuelva un array, split me devuelve separados los elementos de una cadena en un array
     let arrayNumeros = param.split("");
     console.log(arrayNumeros)
      // Revertimos el orden del array
     arrayNumeros.reverse();
     console.log(arrayNumeros)

     // para iterar en el array y lo convierto en número
     let test = arrayNumeros.map((elemento) => {
     return Number(elemento);
     })
     console.log(test)

    //  iterando para encontar las posiciones pares y luego multiplicar por 2 el elemento
     let findIndex= test.map((elemento,index)=>{
     if (index % 2 !==0 ){
      return elemento*2;
     }
     else {
      return elemento
     }
     })
     console.log(findIndex)

    //  .reduce() para sumar todos los números
     const initialValue=0
     let sumaTotal= findIndex.reduce((a,b) =>{
      return a + b
     },initialValue)
     console.log (sumaTotal)

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


   // // Revertimos el orden del array
   // arrayNumeros.reverse();
   // // console.log(arrayNumeros)

   // // para iterar en el array y lo convierto en número
   // let test = arrayNumeros.map((elemento) => {
   //   return Number(elemento);
   // })
   // // console.log(test)

   // let findIndex= test.map((elemento,index)=>{
   //   if (index%2 !=0 ){
   //     return elemento*2;
   //   }
   //   else {
   //     return elemento
   //   }

   // })
   // // console.log(findIndex)

   // const initialValue=0
   // let sumaTotal= findIndex.reduce((a,b) =>{
   //    return a + b
   // },initialValue)
   // // console.log (sumaTotal)

   // let resultado =()=>{
   //   if (sumaTotal %10===0){
   //    return true
   //   }
   //   else {
   //     return false
   //   }
   // };
   // return resultado();
  },


  maskify: function (parametro) {
    // if (param=" "){
    // alert("Escriba aquí tu número de tarjeta")
    // }
    // else{
      let lastFour= parametro.slice(-4);
      console.log(lastFour)
      let relleno= lastFour.padStart(parametro.length,"#");
      console.log(relleno)
      return relleno
    // }
  }
};

export default validator;
