/*
FOR (loop) - ciklas
*/

for (let i = 0; i < 5; i++) 
    {
    console.log('a) number:', i);
    }

console.log('------------');

for (let i = 2; i <= 7; i++) 
    {
    console.log('b) number:', i);
    }

console.log('------------');

for (let i = 5; i >= 0; i--) 
    {
    console.log('c) number:', i);
    }

console.log('------------');

// 0, 1, 2, 3, 4, ....
// 0, 2, 4, 6, 8, ....

for (let i = 0; i < 11; i += 2) 
    {
    console.log('kas du:', i);
    }

console.log('------------');

for (let k = 0; k < 1; k += 0.1) 
    {
    console.log(k);
    }

console.log('------------');

for (let k = 0; k < 10; k++) 
    {
    console.log(k / 10);
    }

console.log('------------');

console.log(0.1 + 0.2);
console.log((10 + 20) / 100);
console.log((399 + 20) / 100);


console.log('------------');

console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');


console.log('------------');

for (let i = 1; i <= 4; i++) 
    {
    console.log('Labas');
    }


console.log('------------');

const n = 4;

console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);

console.log('------------');

for (let i = 1; i <= 10; i++) 
    {
    console.log(`${n} * ${i} = ${n * i}`);
    }
//kodėl trumpiau negalima rašyt?
console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];
console.log(sum);

let sum2 = 0;

for (let i = 0; i < marks.length; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('--------------');

// Studento vardas yra VARDAS.
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
}


console.log('---------------------NamuDarbai su Ciklais----------------------')



function intervalSum(start, end) 
{
    let sum = 0;

    if (start === 0) 
        {
        sum = (end * (end + 1)) / 2;
        } else 
        {
        for (let i = start; i <= end; i++) 
            {
            sum += i;
            }
        }

    return sum;
}



console.log('1)', intervalSum(0, 0));
console.log('2)', intervalSum(0, 4));
console.log('3)', intervalSum(574, 815));
console.log('4)', intervalSum(-50, 50));
console.log('5)', intervalSum(-70, 30));


function atvirkstinisTextas(text) 
    {
    let atvirkstinisTextas = "";
    
    for (let i = text.length - 1; i >= 0; i--) 
        {
      atvirkstinisTextas += text[i];
        }
  
    return atvirkstinisTextas;
    }
  
  let textas = "abcdef";
  let atvirkstinis = atvirkstinisTextas(textas);
  console.log(atvirkstinis);
console.log('-----------------------------------------------------');



function dalybaIsTryju(start, end) {
    let sum = 0;
    
    // Loop through the interval from start to end (inclusive)
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0) {
        sum++;  // Increment the counter if the number is divisible by 3
      }
    }
    
    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 3 yra ${sum} vienetai`;
  }
  

console.log('1)', dalybaIsTryju(0, 11));
console.log('2)', dalybaIsTryju(8, 31));
console.log('3)', dalybaIsTryju(-18, 18));

console.log('-----------------------------------');


function dalybaIsPenkiu(start, end) {
    let sum = 0;
    
    // Loop through the interval from start to end (inclusive)
    for (let i = start; i <= end; i++) {
      if (i % 5 === 0) {
        sum++;  // Increment the counter if the number is divisible by 3
      }
    }
    
    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 5 yra ${sum} vienetai`;
  }
  

console.log('1)', dalybaIsPenkiu(0, 11));
console.log('2)', dalybaIsPenkiu(8, 31));
console.log('3)', dalybaIsPenkiu(-18, 18));


console.log('-----------------------------------');


function dalybaIsSeptyniu(start, end) {
    let sum = 0;
    
    // Loop through the interval from start to end (inclusive)
    for (let i = start; i <= end; i++) {
      if (i % 7 === 0) {
        sum++;  // Increment the counter if the number is divisible by 3
      }
    }
    
    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 7 yra ${sum} vienetai`;
  }
  

console.log('1)', dalybaIsSeptyniu(0, 11));
console.log('2)', dalybaIsSeptyniu(8, 31));
console.log('3)', dalybaIsSeptyniu(-18, 18));



function stringReverse(text) 
  {
   let result = '';
    for (let i = text.length - 1; i >= 0; i--)
      {
        result+= text[i];
      }

   return result;
  }

  console.log(stringReverse('abc'));
  console.log(stringReverse('sula'));
  console.log(stringReverse('sedek'));
  console.log(stringReverse('uzu'));
  console.log(stringReverse('sachmatai'));
  console.log(stringReverse('saskes'));




  function stringReverse2(text) 
  {
   let result = '';
    for (let i = 0; i < text.length; i++)
      {
        result += text[text.length - i - 1];
      }

   return result;
  }

  console.log(stringReverse2('abc'));
  console.log(stringReverse2('sula'));
  console.log(stringReverse2('sedek'));
  console.log(stringReverse2('uzu'));
  console.log(stringReverse2('sachmatai'));
  console.log(stringReverse2('saskes'));



  function stringReverse3(text) 
  {
   let result = '';
    for (let i = 0; i < text.length; i++)
      {
        result += text[i] + result;
      }

   return result;
  }

  console.log(stringReverse3('abc'));
  console.log(stringReverse3('sula'));
  console.log(stringReverse3('sedek'));
  console.log(stringReverse3('uzu'));
  console.log(stringReverse3('sachmatai'));
  console.log(stringReverse3('saskes'));



  function stringReverse4(text) 
  {
    if (typeof text !== 'string')
      {
        return 'Reikalinga string tipo reiksme.';
      }
   let result = '';
    for (let i = 0; i < text.length; i++)
      {
        result += text[i] + result;
      }

   return result;
  }

  console.log(stringReverse4([]));
  console.log(stringReverse4([1,2]));
  console.log(stringReverse4(['asd', ,'efre']));
  console.log(stringReverse4(145));
  console.log(stringReverse4('sachmatai'));
  console.log(stringReverse4('saskes'));

  console.log('-----------------------------------');

  function intervalCount(start, end, divider) 
  {const trueStart = start;
    for (let i = trueStart; i <= end; i+= divider)
         {
          count++
        }
      return `Skaičių intervale tarp ${start} ir ${end},besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
  }

console.log (intervalCount(0,11,3));
console.log (intervalCount(0,11,5));
console.log (intervalCount(0,11,7));


console.log('-----------------------------------');

function intervalCount4 (start, end, divider)
  { if (typeof start !== 'number')
    {
      return 'pradžioj turi būti skaičius'
    }

  }

/*console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));

console.log(intervalCount(NaN, 11, 7));
console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));

console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity));

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));*/