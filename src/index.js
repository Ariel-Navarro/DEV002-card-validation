import validator from './validator.js';

const botonEnviar = document.getElementById('enviar');

// Asigno un evento al hacer click en el botón de enviar
botonEnviar.addEventListener('click', () => {

  // Capturo el valor del input
  let valorNumTarj = document.getElementById('numero').value;

  validator.isValid(valorNumTarj)
  validator.maskify(valorNumTarj)
  // console.log(validator.isValid(valorNumTarj))

  if (validator.isValid(valorNumTarj) === true){
    alert("No tienes cobros pendientes")
  }
  else {
    alert("Su número de tarjeta no es válido. Haga click aquí para concocer su problema  https://www.viabcp.com/ayuda-bcp")
  }

});

// form.addEventListener("submit",(e) =>{
//   let mensaje= []
//   if (valorNumTarj.value===" "|| valorNumTarj.value==null){
//     mensaje.push("Número de tarjeta es requerido")
//   }

//   if(mensaje.length < 16){
//     e.preventDeFault()
//     errorElement.innerText= mensaje.join (",")
//   }
// })


console.log(validator);


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
