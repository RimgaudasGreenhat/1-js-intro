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
function arrayMadness(a, b) {
  let firstArray = 0
  let secondArray = 0
    for (let i = 0; i < a.length; i++) { /// pasirodo čia reikėjo for ciklo, nebandyt praslyst be jo kaip bandžiau :D
      firstArray+= a[i]**2
    }
    
    for(let i = 0; i < b.length; i++) {
      secondArray += b[i]**3
    }
    
    return firstArray > secondArray
  }



// kitas išsprendimo būdas
function arrayMadness(a, b)
{
  const sumOfSquares = a.reduce((sum, num) => sum + num ** 2, 0);
  const sumOfCubes = b.reduce((sum, num) => sum + num ** 3, 0);
  return sumOfSquares > sumOfCubes;
}






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
  return parseFloat(istraukimoTikimybe.toFixed(1))
} 


console.log(guessBlue(5, 5, 2, 3)); 
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6)); /// visus pradinius 6 testus pereina, bet kitu nepereina, reiks gabijos pagalbos.
// kitas sprendimo būdas





//Beginner Series #2 Clock

function past(h, m, s){
  return h * 3600000 + m * 60000  + s * 1000;
}


//kitas sprendimo budas

function past1(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
 //arba

 const past2 = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

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
const summation1 = n => n * (n + 1) / 2; // wow

// arba
function summation2(num) {
  return num * (num + 1) / 2
}


//Keep Hydrated

function litres(time) 
{
  return Math.floor(time* 0.5); //Math.floor'o reikia kadangi pati salyga prašo išgertų litrų reikšmę suapvalinti į mažesnę pusę
}


//kitas sprendimo būdas

const litres1 = time1 => Math.floor(time1 * 0.5);




//Calculate the number of magazines


function magNumber(info)
{
  let mag = 0
  if (info[0] === "PT92")
  {
      mag = Math.ceil((3 * info[1])/17);
  }
   if (info[0] === "M4A1" || info[0] === "M16A2" )
  {
      mag = Math.ceil((3 * info[1])/30);
  }
    if (info[0] === "PSG1")
  {
      mag = Math.ceil((3 * info[1])/5);
  }
    return mag;
}


//kitas sprendimo būdas (nepublishintas sitas buvo tai dar nieko nera sad:()




//Calculate BMI


function bmi(weight, height) 
{
  let kunoMase = '';
  if (weight/(height **2) <= 18.5)
  {
    kunoMase = "Underweight"
  }
   else if (weight/(height **2) <= 25.0)
  {
    kunoMase = "Normal"
  }
  else if (weight/(height **2) <= 30.0)
  {
    kunoMase = "Overweight"
  }
   else
  {
    kunoMase = "Obese"
  }
    return kunoMase
}


//kitas sprendimo budas
const bmi1 = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" : //damn
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";



//Drink about


function peopleWithAgeDrink(old) 
{
  if (old < 14)
  {
    return  'drink toddy'
  }
  else if (old < 18)
  {
    return  'drink coke'
  }
  else if (old < 21)
  {
    return  'drink beer'
  }
  else 
  {
    return  'drink whisky'
  }
};


// kitas sprendimo būdas

const peopleWithAgeDrink1 = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky" // WOW




  //Function 2 - squaring an argument


  function square (num)// daugiau tokių uždavinių XD
{
  return num*num;
}


//kiti sprendimo būdai

const square1 = (n) => n * n;




//Opposite number

function opposite(number) 
{
  return -number
}


//kiti sprendimo metodai

function opposite(number) {
  /* Now this is the story all about how
      My life got flipped, turned upside down
      And I'd like to take a minute just sit right there
      I'll tell you how I became the prince of a town called Bel-air
      
      In west Philadelphia born and raised
      On the playground where I spent most of my days
      Chilling out, maxing, relaxing all cool
      And all shooting some b-ball outside of the school
      When a couple of guys, they were up to no good
      Started making trouble in my neighbourhood
      I got in one little fight and my mom got scared
      And said "You're moving with your auntie and uncle in Bel-air" (absolute cinema!!! \o/)
      
      I whistled for a cab and when it came near the
      License plate said "fresh" and had a dice in the mirror
      If anything I could say that this cab was rare
      But I thought nah, forget it, yo homes to Bel-air!
      
      I pulled up to a house about seven or eight
      And I yelled to the cabby "Yo, homes smell you later!"
      Looked at my kingdom I was finally there
      To sit on my throne as the prince of Bel-air */
  return -number;
}

//arba

const opposite1 = number => -number;


// Area or Perimeter

const areaOrPerimeter = function(l , w) //dumb ass uždavinys kvadrato perimetro pavizdys parašytas neteisingai (3,3 turi gautis 9, nors iš tiesų turi gautis 12 kadangi kvadratas turi ketures puses ne 3?) ( ką jis/ji skaičiavo?) 
{
    return (l*2) + (w*2)
};



//Century From Year

function century(year) 
{
  return Math.ceil(year/100)
}


//kitas sprendimo būdas

function century(year) {
  return (year + 99) / 100 | 0;
}


//arba

const century1 = year => Math.ceil(year/100)



//Will there be enough space?

function enough(cap, on, wait) 
{ let left = (cap - on) - wait
  if(left > 0)
  {
    left = 0
    return left /// reik nepamiršt šito return'o parašyt, nes be jo man taip ir mes 'unedentified' :)
  } else
  {
    return Math.abs(left)
  }
}
console.log(enough(20, 5, 5));

//kitas sprendimo būdas

function enough1(cap, on, wait) {
  return Math.max(wait + on - cap, 0); // geras taip išeina tesiog jei po klablelio parašai 0 tai ir gražins jį jei salygą tenkins?
}


//Reversed Words

function reverseWords(str){
  return str.split(' ').reverse().join(' '); //šitą reikia prisimint, nes užtrukau kol suradau blemba :/
}


// kitas sprendimo būdas
const reverseWords1 = (str) => str.split(" ").reverse().join(" ");



//Add Length

function addLength(str)
{
  return str.split(" ").map(word => `${word} ${word.length}`);// išsplitinam išpradžių žodžius stringe, kad gautusi atskiri žodžiai arėjuje ir poto pasidarome kintamajį 'word' kuris yra = tas žodis + jo ilgis.
}
console.log(addLength('apple ban'));


//kitas sprendimo būdas

function addLength1(str) {
  const words = str.split(" ") // kiek negražėsnis būdas, bet gal labiau suprantamas man asmeniškai perskaičius
  let result = [ ]
 for (const word of words){ 
   result.push(word +" " + word.length)
 } 
 
return result
   
}



//Counting sheep...

function countSheeps(sheep)
{ let sheeps = 0;

  for (let i = 0; i < sheep.length; i++) 
      if (sheep[i] == true)
        sheeps ++;

        return sheeps;
}



//kitas sprendimo budas

function countSheeps1(sheep)
{
  return sheep.filter(Boolean).length
}



//Difference of Volumes of Cuboids

function findDifference(a, b) 
{
  return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2])) //reik nepamiršt papildomų skliaustelių Math.abs funkcijai, kitaip nepadarys atsakymo kaip pozityvaus skaičiaus :)
}


// kitas sprendimo būdas

function find_difference1([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}



//Third Angle of a Triangle I mean...

function otherAngle(a, b) { // aš niekas nedraugavau su geometrija bet netgi aš žinau šitą :D
  return 180 - a - b
}


//kiti sprendimo būdai


function otherAngle1(a, b) {
  if(a<0 || b<0) //ensure no negative angles
    return 0;
  if((a+b)>=180) //ensure 2 angles don't sum up to 180 // basically apsaugos nuo nesamonių uždėtos respect
    return 0;
  return 180 - a - b; //return missing angle
}



// Switch it Up! (žinau kad čia su swwitch'u preferina, bet man if'as labiau patinka nei switchas)

function switchItUp(number)
{
  if (number === 0) // reikia nepamiršti ===
  {
    return 'Zero';
  }
  else if (number === 1)
  {
    return 'One';
  }
  else if (number === 2)
  {
    return 'Two';
  }
  else if (number === 3)
  {
    return 'Three';
  }
  else if (number === 4)
  {
    return 'Four';
  }
  else if (number === 5)
  {
    return 'Five';
  }
  else if (number === 6)
  {
    return 'Six';
  }
  else if (number === 7)
  {
    return 'Seven';
  }
  else if (number === 8)
  {
    return 'Eight';
  }
  else if (number === 9)
  {
    return 'Nine';
  }
  else
  {
    return 'The number is not between 0 and 9';
  }
  
}


// sprendimas su switch funkcija

  function switchItUp2(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
  }

  
//labai geras būdas išspręst šitą uždavinį
switchItUp1=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n] //crazy

// greeting sutrumpintas sprendimas
const greet = () => "hello world!";



//Simple multiplication

function simpleMultiplication(number) 
{
  if (number %2 ===0)
  {
    return number * 8
  }
  else
  {
    return number * 9
  }
}

//kiti sprendimo būdai
function simpleMultiplication1(n){
  return n % 2 == 0 ? n * 8 : n * 9
}




//Grasshopper - Basic Function Fixer


function addFive(num) {
  var total = num + 5
  return total// čia tesiog vietoj return num reikėjo pataisyti į return total. IDK ar da yra geresnis būdas šitam uždavinui.
}



//dar vienas būdas
function addFive1(num) {
  return num + 5;
}


//Super Duper Easy
function problem(x)
{
  if (typeof x === 'string')
  {
    return "Error"
  }
  else
  {
    return (x * 50) + 6
  }
}

//geresnis būdas išspręsti

const problem1 = x => typeof x === 'string' ? 'Error' : x * 50 + 6;



//Grasshopper - If/else syntax debug
function checkAlive (health) {
  if (health > 0) 
  {
    return true//once again reikėjo sutvarkyti sintakses buvo veltui kliaustų pridėta ir pan.
  } else 
  {
    return false
  }
}



//kiti sprendimo būdai

function checkAlive(health) {
  return health > 0;
}


//arba
function checkAlive (health) {
  return health > 0 ? true : false;
}



//Capitalization and Mutability

function capitalizeWord(word) 
{
  return word.charAt(0).toUpperCase() + word.slice(1);// reikia daugiau praktikos man prisimenant kad reikia slice'o ir charAt funkcijų :(
}



//kiti sprendimo būdai

function capitalizeWord(word) {
  var str = word[0].toUpperCase();
  for (let i = 1; i<word.length; i++) { // su for ciklu pasidarė insane XD
  str += word[i];
  }
  return str;
}


//Contamination #1 -String-

function contamination(text, char)
{
  return char.repeat(text.length); // kai reikia sakinį paverst į tam tikrą simbolį kuris naudoja originalaus teksto raidžių skaičių reikia naudoti repeat'ą o ne replace'ą :)
}


// kiti sprendimo būdai

function contamination(text, char) {
  return text.split("").fill(char).join(""); //ai atskiriam textą po vieną raidė, poto pakeičiam tas raides simboliu ir poto sujungiam raides(simbolius tuo atvėju) į tekstą.
}


// sunkesnis metodas su for ciklu
function contamination(text, char) {
  if (text.length === 0 || char.length === 0) {
    return '';
  } else {
    let str = '';
    for (let i = 0; i < text.length; i += 1) {
      str += char;
    }
    return str;
  }
}


//Find the position!

function position(letter)
{
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}` // I guess mažųjų raidžių indeksai prasideda nuo 0 - 97, bet čia jei nori kad a = 0
}

//kitas sprendimo budas

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;




//Grasshopper - Debug sayHello

function sayHello(name) { //pretty simple tesiog nuimt paprastus skliaustus, pakeist kabutem ir su dolco zenklu pridėt vardą.
  return `Hello, ${name}`;
}

//kitas sprendimo būdas

function sayHello (name) {
  return 'Hello, ' +  name; // ai nu jo galėjau taip padaryt
}

//arba

const sayHello = name => `Hello, ${name}`;

//Jenny's secret message

function greet(name)
{
    if(name === "Johnny")
        {
            return "Hello, my love!"; // tesiog aptvarkyt reikėjo, dar bereikalingai sukeičiau vietom ifą, bet gera praktika sintaksei rašyt I guess.
        }
        else
        {
            return "Hello, " + name + "!";
        }
}


//kitas būdas


function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}



//A Needle in the Haystack

function findNeedle(haystack)
{
  return 'found the needle at position' + (' ') + haystack.indexOf('needle') //bruh wtf aš čia su for ciklu bandžiau išlankstyt, bet nesigavo tai googlas parodė man šitai, va ka reiškia neapsipratint su teksto metodais smh :(
} 

// kaip su for ciklu galėjau išspręst

function findNeedle(array) {
  for (var i=0; i<array.length; i++){// ahhhhhhhhh aš bandžiau dar kintamajį susikurt atskirą ir nesigavo man, ko reikėjo tai tik basic fukcijos ir išvedimo :(
    if (array[i] === 'needle')
      return 'found the needle at position ' + i;
  }
  }