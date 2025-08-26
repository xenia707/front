const numbers = [10, 4, 100, -5, 54, 2]
const sum1 = numbers.reduce((acc, num)=> acc + num**3, 0)
let sum2 = 0
for(let i = 0; i<numbers.length;i++){
    sum2+=numbers[i]**3
}
let sum3 = 0
for (const num of numbers){
    sum3+=num**3
}
let sum4 = 0
numbers.forEach((num)=>sum4+=num**3)

console.log("reduce ", sum1)
console.log("for ", sum2)
console.log('for of ',sum3)
console.log('foEach ',sum4)