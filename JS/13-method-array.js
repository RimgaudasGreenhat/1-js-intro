/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 4, 8, 6];
const doubleNumbers = [];

for (let i=0; i<numbers.length; i++)
    {
    const number = numbers[i];
    console.log('---', number);

    doubleNumbers.push(number * 2);

    }
console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseName = [];

for (i=0; i< names.length; i++)
    {
        const name = names [i];
        console.log('---', name, name.length);
        nameSizes.push(name.length);
        nameFirstLetters.push(name[0]);
        upperCaseName.push(name.toUpperCase());
        
    }
console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseName);



const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n12 = [];


for (let i=0; i<n1.length;i++)
    {
        n12.push(n1[i]);
    }

    for (let i=0; i<n2.length;i++)
        {
            n12.push(n2[i]);
        }


console.log(n12);


