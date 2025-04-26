// 1. faktorialo išvedimas
function factorial (skaicius)
{
    let suma = 1
    for (let i = 2; i<= skaicius; i++)
        {
            suma *= i;
        }return suma
}

console.log(factorial(4));


//2. raidės skakinyje

function letterCount (zodis)
{
    const raides = {};

    for (let raide of zodis)
        {
            if (raides[raide])
                {
                    raides[raide]++
                } 
                else
                {
                    raides[raide] = 1
                }
        } 
        return raides
}
console.log(letterCount('Pomidoras'));


//3. 3-ju kartotiniai

function repeat (skaicius)
{ 
    for (i=0; i<= skaicius; i++) // kažkodėl undefined meta
        {
            if (i %3 === 0)
                {
                    console.log(i);
                }  
        }
}
repeat(50);


//4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas

function palindrome (zodis)
{
    const z = zodis.toLowerCase();
    if (z === z.split('').reverse().join(''))
        {
            return 'zodis yra palindromas'
        } 
        else
        {
            return 'zodis nera toks'
        }
}
console.log(palindrome('ez'));


//5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje

function countwovels (zodis)
{   const wovels = 'aeiouyEIAOUY'
    let count = 0
    for (r of zodis)
        {
            if (wovels.includes(r))
                {
                    count ++
                }
        }
        return count
}
console.log(countwovels('Labas vakaras fanai'))


//6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore)

function underscore (string)
{
    return string.replaceAll(' ', '_');
}
console.log(underscore('Was is das?'));


// 7. Sukurk funkciją, kuri padvigubina visus skaičius masyve

function double (array)
{  
    return array.map(num => num * 2);
}
console.log(double([1,2,3]));

//8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje

function longestword (sakinys)
{
    const zodziai = sakinys.split(' '); // pasiaiskint dar
    let didziausias = 0;
    let didzodis = '';

    for (zodis in zodziai)
        {
            zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g,'');
            if (zodziai[zodis].length>didziausias)
                {
                    didzodis = zodziai[zodis];
                    didziausias = zodziai[zodis].length
                }
        }
        return didzodis + ' ' + didziausias + ' ' + 'simboliai'
}
console.log(longestword('Ejo zuikis per miska ir pamate neprisikiskekopustedaliaudamsimentalitetiska ezy'))


//9 Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka

function zodziurikiavimas (sakinys)
{
    return sakinys.split(' ').sort((a,b) => a.length - b.length).join(' ')
}

console.log(zodziurikiavimas('ejo ejo zodis per kelma ir nepamte saves ir nukrito'));


//10  Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7

function divide7 (array)
{
    return array.find(num => num %7 ===0);
}
console.log(divide7([1,2,3,5,14,35,44,47,48,54]));

//11 Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide

function startsWithA (array)
{
    return array.filter(name => name.startsWith('A'))
}
console.log(startsWithA(['Antanas', 'Maryte', 'Petras', 'Anastasija']))

//12 Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą

function repeats (array) //nesuprantu
{

}

/*13.Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų
reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15,
    6] )*/

function interval (array)
{
    return array.filter(num => num >= 5 && num <= 20)
}
console.log(interval([2, 5, 36, 8, 15, 6]));


/*14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose
yra raidė e*/

function wordsIncludingE(array)
{
    return array.filter(word => word.includes('e'))
}
console.log(wordsIncludingE(['evangelija', 'angelas', 'Liuciferis', 'araara', 'ratas']))



  