import validator from './validator.js';

const botonEnviar = document.getElementById('enviar');

// Asigno un evento al hacer click en el botón de enviar
botonEnviar.addEventListener('click', () => {

  // Capturo el valor del input
  let valorNumTarj = document.getElementById('numero').value;

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
     return alert("si")
    }
    else {
      return alert("no")
    }
  };
  resultado();
});

console.log(validator);

// setTimeout(function(){
//    return resultado();
// },2000);
// })
// console.log (test[2]*=2)
//   for (let i = 1; i < test.length; i += 2) {
//     console.log(test[i], i)

//     let numeroMultiplicado = arrayNumeros[i] *= 2;
//     console.log(numeroMultiplicado)

//     let separarLosDigitos = Array.from(numeroMultiplicado.toString()).map(Number);
//     console.log(separarLosDigitos)

//     const initialVulue = 0;
//     let sumarDígitos = separarLosDigitos.reduce((a, b) => {
//       return a + b
//     }, initialVulue)
//     console.log(sumarDígitos)

//     // let nuevoArray = test.filter(function (elemento) {
//     //   if (test[0] < 17) {
//     //  return nuevoArray.push(sumarDígitos);

//     //   }
//     // });
//     // console.log(nuevoArray)
//     // let total = numeros.reduce((a, b) => a + b, 0);

//     // console.log(total);

//   };

//   // let nombre= document.getElementById('name').value;
//   // localStorage.setItem('nombre',nombre);
//   // console.log(nombre)
