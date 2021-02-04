const number = [12,45,6,9,];
// let output = [];
// for(let i = 0; i<number.length;i++){
//     let element = number[i];
//     let result = element * element;
//     output.push(result);
// }

number.map(function(element){
   console.log(element * element);
})