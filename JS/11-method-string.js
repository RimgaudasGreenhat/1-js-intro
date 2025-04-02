/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

//at
console.log('\nat');


console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length - 1]);

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));


//include
console.log('\ninclude');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

console.log('Ačiū'.includes('č'));
console.log('Ačiū'.includes('Č'));

console.log('-----');

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));
console.log('Bepasikulversciaudamasis'.includes('kul'));
console.log('Bepasikulversciaudamasis'.includes('ciauda'));
console.log('Bepasikulversciaudamasis'.includes('cauda'));
console.log('Bepasikulversciaudamasis'.includes('Bepasikulversciaudamasis'));

// startsWith

console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith(' Pom'));

// endsWith

console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith(' Pomidoras'));
console.log(' Pomidoras'.endsWith(' Pomidoras'));

// indexOf

console.log('\nindexOf');
//           
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('---');

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));

console.log(k.indexOf('u', k.indexOf('u') + 1));

console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s') + 1));

console.log(k.indexOf('e'));
console.log(k.indexOf('e', k.indexOf('e') + 1));


// repeat

console.log('\nrepeat');
console.log('a');
console.log('a.'.repeat(5));

const symbol = 'labas';
const megaSymbol = symbol.repeat(10);
console.log(symbol);
console.log(megaSymbol);



function stringRepeat(text, count)
{
    let result = '';

    for(let i = 0; i < count; i++)
        {
            result += text;
        }
        return result;
}

console.log(stringRepeat('rikiki',3));
console.log(stringRepeat('apči',4));

// replace

console.log('\nreplace');
console.log('vasara');

const summer = 'vasara.'.replace('a', '-').replace('a', '-');
console.log(summer);

const summer2 = 'vasara.'.replace('a', '-');
console.log(summer2);

const summer3 = 'vasara.'.replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3);


const cloud = 'debeselis'.replace('ebe', '***');
console.log(cloud);


// replaceAll

console.log('\nreplaceAll');

console.log('vasara');
console.log('vasara'.replaceAll('a', '-'));

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));

const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ', '').length;


// toUpperCase

console.log('\ntoUpperCase');

console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('LABAS'.toUpperCase());



// toLowerCase

console.log('\ntoLowerCase');

console.log('labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('LABAS'.toLowerCase());


// slice

console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));

console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(1, 3));

console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(0, -3));
console.log('pomidoras'.slice(3, -3));

console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));
console.log('pomidoras'.slice(-2, -6));














