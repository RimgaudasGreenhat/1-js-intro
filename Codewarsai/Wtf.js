//Sum of positive


function positiveSum(Array) 
{
  let suma = 0;
 {
   for (let i = 0; i < Array.length; i++)
   {
     if (Array[i] > 0)
     {
       suma += Array[i];
       
     }
     {
      return suma
     }
   }
 } 
}

console.log(positiveSum[1, -4, 7, 12]); // kodel nesigauna susumuot tik undefined meta.

// sintaksei buvo klaidų už tai ir nesigavo man ten smh va teisingai išspręstas mano uždavinys


function positiveSum1(skaiciai)
{ let suma = 0;  
  
  for(i = 0; i < skaiciai.length; i++)
  {
    if (skaiciai[i] >= 0)
    {
      suma += skaiciai[i];
    }
  }return suma
} 


/// geriau išspręstas uždavinys


const positiveSum12 = arr => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0) /// Interesting verry interesting.



//arraymadness
function arrayMadness(a, b)
{
  a = (a[0] ** 2 + a[1] **2 + a [2] **2);
  b = (b[0] ** 3 + b[1] **3 + b [2] **3);
  if (a > b)
  {
    console.log('true');
    
  } else if (a < b)
  {
    console.log('false')
  }
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));/// nezinau kur undefined meta





/*Polish alphabet
bent kazkas pavyko blemba bet labai mesmalė kaip galima trumpiau aprašyti arba aiškiau*/

function correctPolishLetters (string) {
    return string.replaceAll('ą', 'a').replaceAll('ć', 'c').replaceAll('ę', 'e').replaceAll('ł', 'l').replaceAll('ń', 'n').replaceAll('ó', 'o').replaceAll('ś', 's').replaceAll('ź', 'z').replaceAll('ż', 'z')
  }
  
  console.log(correctPolishLetters("Jędrzej Błądziński"))



  /// alternatyvus man suprantamas būdas
  function correctPolishLetters (string) {
    return string
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
  }
  console.log(correctPolishLetters("Jędrzej Błądziński"));


  //All Star Code Challenge #18

  function strCount(str, letter){  
    let suma = 0
    for (i = 0; i< str.length; i++)
    {
      if(str[i] === letter)
      {
        suma ++;
      }
    }return suma;
  }
  console.log(strCount('Hello', 'l'));
  console.log(strCount('Hello', 'o')); // ok ok jau pobiški einasi spręst tesiog reik neužsisedėt prie neišsprendžiamų uždaviniu ir daryt Gabijos užduotis prisiminimui
  console.log(strCount('', 'z'));


  //Geresnis metodas išspręsti gal

  function strCount1(str, letter){  
    return str.split(letter).length-1           ///bro what? tik tiek galima buvo parašyt? jesus
  }
  console.log(strCount1('Hello', 'l'));
  console.log(strCount('Hello', 'o'));
  console.log(strCount('', 'z'));
  
  console.log('----------');
  //Is it even?

  function testEven(n) {
    if(n %2 === 0)
    {
      return true;
    } 
  else
  {
    return false;
  }
}
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));
console.log('----------');




//geresnis būdas išspręst surely....


function testEven1(n) {            // yeah makes sense, mažiau rašymo ir apsikrovimo
  return n % 2 === 0
}

console.log(testEven1(0));
console.log(testEven1(0.5));
console.log(testEven1(1));
console.log(testEven1(2));
console.log(testEven1(-4));
console.log('----------');



//Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => 
  {
    if(distanceToPump <= mpg * fuelLeft)
    {
      return true
    }
    else
    {
      return false
    }
  };
  
  console.log(50,25,2)
  console.log(100,50,1)/// idk tesiog logiskai truputi pagalvojau ir isprendziau pretty easy ngl bet.....



  // tikrai yra geriau išspręstas šis uždavinys:


  const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };// cool viskas taip talpiai surašyta.







  //Find the Difference in Age between Oldest and Youngest Family Members 
  function differenceInAges(ages){
    let biggestAge = ages[0];
    let smallestAge = ages[0];
    for(i = 0; i < ages.length; i++)
    {
      if (ages[i] > biggestAge)
      {
        biggestAge = ages[i];
      }
      if (ages[i] < smallestAge)
      {
        smallestAge = ages[i]
      } difference1 = biggestAge - smallestAge; 
    } return [smallestAge, biggestAge, difference1]
  }
  console.log(differenceInAges([82, 15, 6, 38, 35]));

// kitas sprendimo būdas
function differenceInAges1 (ages1) {

  let max = Math.max(...ages1),
      min = Math.min(...ages1)
      diff = max - min
      
  return [min, max, diff]
}
  console.log(differenceInAges1([82, 15, 6, 38, 35]));



  // Is he gonna survive?

  function hero(bullets, dragons)
{
  if(bullets >= dragons * 2)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(hero(10,5));
console.log(hero(7,4));
console.log(hero(4,5));
console.log(hero(100,40));
console.log(hero(1500,751));
console.log(hero(0,1));

//kitas sprendimo būdas

function hero(bullets, dragons){ // rodyklinė funkcija kurią ejom šiandien make sence kadangi yra viena salyga
  return bullets >= dragons * 2
}



function getDrinkByProfession(param)
{
  return param.split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();})
  .join(' ');
}
console.log(getDrinkByProfession('scHOOl counselor'))





function getDrinkByProfession1(param1)
{if (param1 === "Jabroni")
  {
    return "Patron Tequila";
  }
}
  console.log(getDrinkByProfession1("jabrOni")) /// nesigauna plius dar nezinau kaip reiktų man tuos pataisymus padaryt kad neteisingai parasytus zodzius parasytu arba uzfiksuotu kaip teisingai parasytus zodzius



  //You Can't Code Under Pressure #1


  function doubleInteger(i) {
    i = i * 2
    return i;
  }
  console.log(doubleInteger(2))


  //kitas sprendimo būdas

  function doubleInteger(i) 
  {
    return i * 2;
  }



///Triple Trouble

  function tripleTrouble(one, two, three)
  {
    let zodis = '';
    let zodziuIlgis = Math.max(one.length, two.length, three.length);
    for (let i = 0; i < zodziuIlgis; i++)
    {
      zodis += one[i] + two[i] + three[i]; 
    }
    return zodis
  }
  console.log(tripleTrouble("aaa","bbb","ccc"));
  console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"));
  console.log(tripleTrouble("burn", "reds", "roll"));
  console.log(tripleTrouble("Sea","urn","pms"));



  //geriau išsprestas uzdavinys


  const tripleTrouble2 = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

  //arba

  function tripleTrouble3(one, two, three){
    let x = ''
      for(i = 0; i<one.length; i++) {
        x +=  one[i] + two[i] + three[i]
      }
    return x
   }




//Blue marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled)
{
  let kamuoliukuKiekis = (blueStart - bluePulled) + (redStart - redPulled);
  let raudonuKamuoliukukiekis = redStart - redPulled;
  const istraukimoTikimybe = (1 - (raudonuKamuoliukukiekis * (1/kamuoliukuKiekis)));
  return istraukimoTikimybe.toFixed(1)
} 


console.log(guessBlue(5, 5, 2, 3)); 
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6)); /// neprema, raso kad gauna '0.6' vietoj tesiog 0.6 reik gabijos pagalbos




//Beginner Series #2 Clock

function past(h, m, s){
  return h * 3600000 + m * 60000  + s * 1000;
}


//kitas sprendimo budas

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
 //arba

 const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

// Grasshopper - Summation

var summation = function (num) 
{let sum = 0
  for (let i = 1; i <= num; i++)
  {
    sum += i; // užtenka tik tiek kad prisidėtų prie savęs be jokių if'ų ten kai dariau prieš tai
  }return sum
 
}
console.log(summation(1));
console.log(summation(2));
console.log(summation(8));


//kiti sprendimo būdai
const summation = n => n * (n + 1) / 2; // wow

// arba
function summation(num) {
  return num * (num + 1) / 2
}