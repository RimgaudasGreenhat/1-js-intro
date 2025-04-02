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
       return suma;
   }
 } 
}

const skaiciai = [1, -4, 7, 12];
console.log(positiveSum(skaiciai)); // kodel nesigauna susumuot tik teigiamu skaiciu atrodo kad tik pasiema vieneta ir viskas ciklas baigtas







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





