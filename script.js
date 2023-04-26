var numArray = [4,1,3,2,6,1,5,8,-1,9,"hola","sdklgjksdfjkjgh"];
// // var numberPar = numArray.filter(num => num%2===0)
// // console.log(numberPar)

// const getCuadrado=(array, func)=>array.map(func)
// // var cuadradoArray = getCuadrado(numArray,(num)=>(num*num))
// // console.log(cuadradoArray)

// miFuncionSort = numArray.sort((a,b)=>b-a)
// // console.log(miFuncionSort)

// const cuadradoContrario = getCuadrado(miFuncionSort, num=>num*num)
// console.log(cuadradoContrario)


// const matrizArray=()=>numArray.forEach(element => {
//     element=element*5
//     console.log(element)
// });

// console.log(matrizArray)




// const aplicar = (array,func)=>array.map(func)
// const cuadrado = aplicar(numArray,(num)=>num*num)
// console.log(cuadrado)

// const miFuncionSumar = (x)=>((y)=>x+y)
// const sumar = miFuncionSumar(8);
//     console.log(sumar(2))

// const miFuncion = (x)=>((y)=>x*y)
// const sumar = miFuncion(3)
// console.log(sumar(2))

// Escribe una función de orden superior llamada repetir que tome una función y un número como argumentos. La función debería llamar a la función dada el número de veces especificado y devolver un array con los resultados.
// Entrada:
// repetir(console.log, 3)
// Salida:
// [undefined, undefined, undefined]

// const repetir = (func,numArg)=>Array(numArg).fill().map(()=>func())
// console.log(repetir(console.log, 3)) 

// const numeroMayor = numArray.find((num,index,arr)=>num>arr[index+1]||index===arr.length-1)
// console.log(numeroMayor)

// number = typeof 30
// const numeros = numArray.filter(el=>typeof el=== number)
// console.log(numeros)


// -------------------------------------------------------------------------------------------------------------------------
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// function numeros(arr){
//     numerosFiltrados=arr.filter(el=>typeof el === typeof Number() && el>=0)
//     return numerosFiltrados
// }
// console.log(numeros(numArray))
// ===========================================================================================================================>
// arrow funtion form
// const numerosFiltrado = (arr)=>arr.filter(el=>typeof el === typeof Number() && el>=0)
// console.log(numerosFiltrado(numArray))

// console.log(numerosFiltrado([1,2,'aasf','1','123',123]))
// -------------------------------------------------------------------------------------------------------------------------

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
    // Solution
// let n
// function digitalRoot(n){
//     if(n<10){
//         return n
//     }
//     let separado = []
//     separado=String(n).split('')
//     var suma=separado.reduce((acc,num)=>acc+parseInt(num),0)//el metodo reduce lo utilice para hacer las sumas, variables entrantes acc=acumulador, num=el_numero_con_el_que_se_suma(ojo colocar parseint para que entienda que es un numero), 0=es la inicializacion
//     return digitalRoot(suma)
// }
// console.log(digitalRoot(493193))
// ===========================================================================================================================>
// digitalRoot=(n)=>{
//     if(n<10)
//         return n
//     suma=String(n).split('').reduce((acc,num)=>acc+parseInt(num),0)
//     return digitalRoot(suma)
// }
// console.log(digitalRoot(2))
// -------------------------------------------------------------------------------------------------------------------------
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

//Solved with epresion regular 
// let fechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(fechaHora.test("30-01-2003 15:20"));
// // → true
// console.log(fechaHora.test("30-jan-2003 15:20"));
// // → false
// let noBinario = /[^01]/;
// console.log(noBinario.test("1100100010100110"));
// // → false
// console.log(noBinario.test("1100100010200110"));
// // → true
// console.log(/'\w+'/.test("'123'"));
// // → true
// console.log("uno dos 100".match(/\d+/));
//-------------------------------------------------------------------desde aqui comienza
// function printer_error(s){
//     s=String(s)
//     const expresiones=/[a-m]/
//     var errores=0
//     var separado=[]
//     separado=s.split('')
//     for (const i in separado) {
//         if(!expresiones.test(separado[i]))
//             errores++
//     }
//     const result=String(errores)+"/"+s.length
//     return result
// }

// console.log(printer_error("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

// -------------------------------------------------------------------------------------------------------------------------
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// example
//     assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//     assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//Solution by me:
// function findShort(s){
//     var arr=[]
//     var separado=[]
//     separado=String(s).split(' ')
//     for (const i in separado) {
//         arr.push(separado[i].length)
//     }
//     const min = arr.reduce((x,y)=>Math.min(x,y))
//     return min
// }
// console.log(findShort("Let's travel abroad shall we"))
// -------------------------------------------------------------------------------------------------------------------------
//Saber si un numero es cuadrado
// example
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// const isSquare = (n)=>{//6
//     var m,d
//     if(n===0||n===1){
//         return true}
//     else{
//     for(i=2;i<n;i++){
//         //console.log(i)
//         m=n%i//0//0//2
//         d=n/i//3//2//
//         if((m==0&&d==i))//(t,f)//(t,f)
//             return true
//     }
//     return false}
// }
// console.log(isSquare(24))
// -------------------------------------------------------------------------------------------------------------------------
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//  You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// var countBits = function(n) {
//     var n,bit=0
//     while(n>0){
//         if(n%2==1 || n==1)
//             bit++
//         n=parseInt(n/2)
//     }
//     return bit
// };
// console.log(countBits(92616472))
// -------------------------------------------------------------------------------------------------------------------------
// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".
// function shortenToDate(longDate) {
//     // your code here
//     //var longDate=String(longDate)
//     var i_coma=longDate.split('').findIndex(el=>el==',')
//     return longDate.substring(0,i_coma)
// }
// console.log(shortenToDate("Friday May 2, 7pm"))

// -------------------------------------------------------------------------------------------------------------------------
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
//-------------------------------------------------------------------desde aqui comienza
// function descendingOrder(n){
//     arr=parseInt(String(n).split('').sort((a,b)=>b-a).join(''))
//     return arr
//   }
// console.log(descendingOrder(123456789))

// //arrow function
// const descendingOrder=(n)=>parseInt(String(n).split('').sort((a,b)=>b-a).join(''))
// console.log(descendingOrder(145263))
//-------------------------------------------------------------------
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//-------------------------------------------------------------------desde aqui comienza
// function openOrSenior(data){
//   arr=[]
//   for (const i in data) {
//     (data[i][0]>=55 && data[i][1]>7)?arr.push("Senior"):arr.push("Open")
//   }
//   return arr
// }

//-------------------------------------------------------------------desde aqui comienza
// function openOrSenior(data){
// console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str){
//    str=str.split('')
// }
function solution(str){
  var arr=[]
  if(!(str.length%2==0))
    str=str+"_"
  str=str.split('')
  for(var i=0;i<str.length-1;i+=2){
    if((str.length)%2==0)
      arr.push(str[i]+str[i+1])
  }
  return arr
}

console.log(solution("abcdefg"))