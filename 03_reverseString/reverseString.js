const reverseString = function(string) {
// minha solução
    // resultado='';
// for(let i = string.length - 1; i >= 0; i--){
//     resultado +=string[i];
// }
// return resultado;

return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
