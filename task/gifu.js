const numbers = [1, 2, 3 ,4]

if (numbers[0] ===3 || numbers[1] ===3 || numbers[2] ===3 || numbers[3] ===3)
{
    console.log(`skaicius 3 yra rastas sarase ${numbers}`);
} 
else
{
    console.log('');
}


const arejus = []
if (arejus.length === 0)
    {
        console.log('arejus yra tuscias');  // kazkodel negaunu sito log'o nors arejaus ilgis turetu buti 0 ar ne?
    }
    else 
    {
        console.log('');
    }




const arejus2 = [1, -2, 3, -4];
if (arejus2 [0] >= 0 || arejus2 [1] >= 0 || arejus2 [2] >= 0 || arejus2 [3] >= 0)
{
    console.log(`sarase ${arejus2} yra teigiamu skaiciu`);
}
else 
    {
        console.log('sarase nerea teigiamu skaiciu');
    }




const arejus3 = [2, 4, 6];
if (arejus3 [0] %2 || arejus3 [1] %2 || arejus3 [2] %2)
{
console.log('sis rinkinys yra sudarytas is lyginiu skaiciu');
}
else{
    console.log('')
    }

const arejus4 = [3, 5, -2];
if (arejus4 [0] || arejus4[1] || arejus4[2] >= 0) {
    console.log(`sarase ${arejus4} yra neigiamas skaicius`);
} if(arejus4 [0] || arejus4[1] || arejus4[2] <= 0 )
    {
        console.log('');
    }
 else {
    console.log('');
}


const arejus5 = [1,3,5];
if (arejus5 [0] > arejus5[2])
{
 console.log('pirmas saraso skaiciu yra didesnis uz paskutini');   
} else 
{
    console.log('pirmas saraso skaiciu nera didesnis uz paskutini');
}


const arejus6 = [1, 2, 3, 4, 5, 6];
if (arejus6.length > 5)
    {
        console.log(`saraso ${arejus6} ilgis yra didesnis negu 5`);
    }
    else 
    {
        console.log('');
    }


const vaisiai = ['obuolys', 'bananas', 'vysnia'];
if(typeof vaisiai[0] === 'string' && typeof vaisiai[1] === 'string' && typeof vaisiai[2] === 'string')
    {
        console.log(`sarase ${vaisiai} yra tik teksto tipo kintamieji`);
    }
    else
    {
        console.log('');
    }



console.log('----------------uzduotys su funkcijomis------------------');



function teigiamasSkaicius(skaicius)
{
 if (skaicius >=0)
    {
        return skaicius;
    }   
    else
    {
        return('skaicius nera teigiamas nustok grybaut ir parasyk teigiama skaiciu');
    }
}

const b = 1;
const c = -1;
console.log(teigiamasSkaicius(b));
console.log(teigiamasSkaicius(c));
console.log(teigiamasSkaicius(-1));


console.log('---------------------------------------');


function sqroot(skaicius)
{
    return skaicius **(1/2)
}

console.log(sqroot (81));
console.log(sqroot (4));


console.log('---------------------------------------');


function numbPick(n1, n2)
{
    if(n1>n2)
        {
            return n1;
        }
        {
            if(n1<n2)
                {
                    return n2;
                }
                {
                    if(n1===n2)
                        {
                            return(`kintamieji ${n1} ir ${n2} yra lygus`);
                        }
                        else
                        {
                            return('pasitikrink savo kintamuosius bruh');
                        }
                }
        }
}

console.log(numbPick(1,2));
console.log(numbPick(4,2));
console.log(numbPick(4,4));
console.log(numbPick('saskes',2));

console.log('---------------------------------------');


function jsSearch(tekstas)// 4-ta uzduotis naudoja .includes komanda ne? jei taip tai mes nesimokinom kas paaiskintu kodel nesugalvoju kaip ispresti ja
{

}


console.log('---------------------------------------');

function numCheck(skaicius)
{
    if(skaicius %2 === 0)
        {
            return ('kintamasis yra lyginis')
        }
        else
        {
            return ('kintamasis salygos netenkina');
        }
}
console.log(numCheck(2));
console.log(numCheck(5));


//6-ta uzduotis man tai rocket science ten wtf? :D


function stacPlotis(x,y)
{
    return x * y
}
    
const statIlPlo = [2,7]
console.log(stacPlotis(2,8));
console.log(stacPlotis(statIlPlo[0], statIlPlo[1])); 

console.log('---------------------------------------');



function numbdiv3(skaicius)
    {
    if (skaicius %3 ===0)
        {
            return ('skaicius dalyjasi is 3-ju ir jo gauta reiksme yra ') + skaicius/3 
        }
        else
        {
            return ('kintamasis nesidalyja is 3-ju')
        }
    }

console.log(numbdiv3(3));
console.log(numbdiv3(9));
console.log(numbdiv3('zuvis'));

console.log('---------------------------------------');

function textDef(textas)
{
    if (textas.startsWith('a')) //startsWith funkcija = nurodai funkcijai nuo kurios raides turi prasidet textas
        {
            return ('tekstas prasideda raide a')
        }
        else
        {
            return ('tekstas neprasideda raide a')
        }
}
console.log(textDef('arejus'));
console.log(textDef('baterija'));
console.log(textDef('gaidys'));

console.log('---------------------------------------');

function numAverage(a,b,c)
{
    if (typeof a,b,c === 'string')
        {
            return 'Reikalingas skaicius'
        }
        else
        {
            return (a + b + c)/3
        }
}


console.log(numAverage(1,2,3));
console.log(numAverage(4,5,6));
console.log(numAverage(-1,-10,-8));
console.log(numAverage('9','4','5')); //// kodel cia veikia tekstiniai skaiciai nors as padariau if'a kad pagautu juos?

console.log('---------------------------------------');

function textoLength(textas)
{
    return textas.length
}
console.log(textoLength('skruzdeliukas'));
console.log(textoLength('Abba'));

console.log('---------------------------------------');

function lineCombo(tex1,tex2)
{
    return tex1 + tex2
}

console.log(lineCombo('simta','kojis'));
console.log(lineCombo('tara','konas'));


//13-os nesupratu, kaip ifa isvest reiktu kad man funkcija surastu ar kintamasis yra tarp dvieju kitu kintamuju.


