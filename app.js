
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
   T : "U "
}));



const { frutas ,money}= require ('./frutas')

fruits.foreach(fruta => {
    console.log('La fruta es: ', fruta)
})
console.log('Dinero: ', money)
