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





