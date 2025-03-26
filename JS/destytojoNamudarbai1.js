const a = 4;
console.log(a);

let b = 9;
console.log(b);

const c = 7;
console.log(c);

let d = 'Ichiban';
console.log(d);

const e = 'Kiryu';
console.log(e);

let f = 'Goro';
console.log(f);


const g = '--------------Sarasai---------------';
console.log(g)

let n1 = [1,2,3,4,5];
console.log(n1);

let n2 = [10,20,30,40,50];
console.log(n2);

let n3 = [100,200,300,400,500];
console.log(n3);

const bandmates = ['Hitori', 'Ryo', 'Nijika', 'Ikuyo', 'Kikuri'];
console.log(bandmates);

const YIW = ['Ichiban', 'Kiryu', 'Tomikawa', 'Chitose', 'Saeko'];
console.log(YIW);

const metallica = ['James', 'Lars', 'Kirk', 'Cliff', 'Jason'];
console.log(metallica);

const h = '------------veiksmai su kintamaisiais-------------------';
console.log(h);

const sum = a + b + c;
console.log(sum);

const zodziai = d + ' ' + e + ' ' + f;
console.log(zodziai);

console.log(n1)

let numbers = [1,2,3,4,5];
let skaiciavimas = 0;
skaiciavimas = skaiciavimas + numbers[0];
skaiciavimas = skaiciavimas - numbers[1];
skaiciavimas = skaiciavimas + numbers[2];
skaiciavimas = skaiciavimas - numbers[3];
skaiciavimas = skaiciavimas + numbers[4];

console.log(skaiciavimas);

let combo = ''

combo = combo + bandmates [4];
combo = combo + ', ';
combo = combo + bandmates [3];
combo = combo + ', ';
combo = combo + bandmates [2];
combo = combo + ', ';
combo = combo + bandmates [1];
combo = combo + ', ';
combo = combo + bandmates [0];
combo = combo + '.';

console.log(combo)


let combo2 = ''

combo2 = combo2 + YIW [4];
combo2 = combo2 + ', ';
combo2 = combo2 + YIW [3];
combo2 = combo2 + ', ';
combo2 = combo2 + YIW [2];
combo2 = combo2 + ', ';
combo2 = combo2 + YIW [1];
combo2 = combo2 + ', ';
combo2 = combo2 + YIW [0];
combo2 = combo2 + '.';

console.log(combo2)


let combo3 = ''

combo3 = combo3 + metallica [4];
combo3 = combo3 + ', ';
combo3 = combo3 + metallica [3];
combo3 = combo3 + ', ';
combo3 = combo3 + metallica [2];
combo3 = combo3 + ', ';
combo3 = combo3 + metallica [1];
combo3 = combo3 + ', ';
combo3 = combo3 + metallica [0];
combo3 = combo3 + '.';

console.log(combo3)






const i = '---------------------Kintamuju palyginimai-----------------------'
console.log(i);

const kint1 = 13;
const kint2 = 36;

if (kint1 > kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (kint1 < kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (kint1 == kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (kint1 != kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (kint1 >= kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (kint1 <= kint2){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}


const text1 = 'Kendrick';
const text2 = 'Drake';

const t1length = text1.length;
console.log(t1length);

const t2length = text2.length;
console.log(t2length);

if (t1length > t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (t1length < t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (t1length == t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (t1length != t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (t1length >= t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}

if (t1length <= t2length){
    console.log('Pomidoras.');
} else {
    console.log('Bandykite kitą kartą.');
}



const array = ['masina', 'dviratis'];

console.log (array[0].length);
console.log (array[1].length);

if (array[0].length > array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

if (array[0].length < array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

if (array[0].length === array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

if (array[0].length !== array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

if (array[0].length >= array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

if (array[0].length <= array[1].length)
    {
    console.log('Pomidoras.');
    } else 
    {
    console.log('Bandykite kitą kartą.');
    }

console.log('------------------------------')






const namuDarbai = '--------------------Namu darbai paskaitos metu--------------'
console.log(namuDarbai)






function sum3(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(sum3(2, 2));
console.log(sum3(7, 5));
console.log(sum3(-7, 15));
console.log(sum3(44, 55));



function sum4(a, b) {
    const result = a - b;
    return `${a} - ${b} = ${result}`;
}

console.log(sum4(2, 2));
console.log(sum4(7, 5));
console.log(sum4(-7, 15));
console.log(sum4(44, 55));


function sum5(a, b) {
    const result = a * b;
    return `${a} * ${b} = ${result}`;
}

console.log(sum5(2, 2));
console.log(sum5(7, 5));
console.log(sum5(-7, 15));
console.log(sum5(44, 55));


function sum6(a, b) {
    const result = a / b;
    return `${a} / ${b} = ${result}`;
}

console.log(sum6(2, 2));
console.log(sum6(7, 5));
console.log(sum6(-7, 15));
console.log(sum6(44, 55));

console.log(true && true && true && true);
console.log(true && true && true || true);
console.log(true && true || true && true);
console.log(true || true && true && true);
console.log(true && true || true || true);
console.log(true || true || true && true);
console.log(true || true && true || true);
console.log(true || true || true || true);

const textas = "---------------0x1-------------------------"
console.log(textas)

console.log(false && true && true && true);
console.log(false && true && true || true);
console.log(false && true || true && true);
console.log(false|| true && true && true);
console.log(false && true || true || true);
console.log(false || true || true && true);
console.log(false || true && true || true);
console.log(false || true || true || true);

const textas1 = "---------------1x1-------------------------"
console.log(textas1)

console.log(true && false && true && true);
console.log(true && false && true || true);
console.log(true && false || true && true);
console.log(true || false && true && true);
console.log(true && false || true || true);
console.log(true || false || true && true);
console.log(true || false && true || true);
console.log(true || false || true || true);

const textas2 = "---------------1x2-------------------------"
console.log(textas2)

console.log(true && true && false && true);
console.log(true && true && false || true);
console.log(true && true || false && true);
console.log(true || true && false && true);
console.log(true && true || false || true);
console.log(true || true || false && true);
console.log(true || true && false || true);
console.log(true || true || false || true);

const textas3 = "---------------1x3-------------------------"
console.log(textas3)

console.log(true && true && true && false);
console.log(true && true && true || false);
console.log(true && true || true && false);
console.log(true || true && true && false);
console.log(true && true || true || false);
console.log(true || true || true && false);
console.log(true || true && true || false);
console.log(true || true || true || false);

const textas4 = "---------------1x4-------------------------"
console.log(textas4)


console.log(false && false && true && true);
console.log(false && false && true || true);
console.log(false && false || true && true);
console.log(false || false && true && true);
console.log(false && false || true || true);
console.log(false || false || true && true);
console.log(false || false && true || true);
console.log(false || false || true || true);

const textas5 = "---------------2x1-------------------------"
console.log(textas5)

console.log(true && true && false && false);
console.log(true && true && false || false);
console.log(true && true || false && false);
console.log(true || true && false && false);
console.log(true && true || false || false);
console.log(true || true || false && false);
console.log(true || true && false || false);
console.log(true || true || false || false);

const textas6 = "---------------2x2-------------------------"
console.log(textas6)

console.log(false && true && false && true);
console.log(false && true && false || true);
console.log(false && true || false && true);
console.log(false || true && false && true);
console.log(false && true || false || true);
console.log(false || true || false && true);
console.log(false || true && false || true);
console.log(false || true || false || true);

const textas7 = "---------------2x3-------------------------"
console.log(textas7)

console.log(true && false && true && false);
console.log(true && false && true || false);
console.log(true && false || true && false);
console.log(true || false && true && false);
console.log(true && false || true || false);
console.log(true || false || true && false);
console.log(true || false && true || false);
console.log(true || false || true || false);

const textas8 = "---------------2x4-------------------------"
console.log(textas8)


console.log(false && true && true && false);
console.log(false && true && true || false);
console.log(false && true || true && false);
console.log(false || true && true && false);
console.log(false && true || true || false);
console.log(false || true || true && false);
console.log(false || true && true || false);
console.log(false || true || true || false);

const textas9 = "---------------2x5-------------------------"
console.log(textas9)

console.log(true && false && false && true);
console.log(true && false && false || true);
console.log(true && false || false && true);
console.log(true || false && false && true);
console.log(true && false || false || true);
console.log(true || false || false && true);
console.log(true || false && false || true);
console.log(true || false || false || true);

const textas10 = "---------------2x6-------------------------"
console.log(textas10)

console.log(false && false && false && true);
console.log(false && false && false || true);
console.log(false && false || false && true);
console.log(false || false && false && true);
console.log(false && false || false || true);
console.log(false || false || false && true);
console.log(false || false && false || true);
console.log(false || false || false || true);

const textas11 = "---------------3x1-------------------------"
console.log(textas11)

console.log(false && false && true && false);
console.log(false && false && true || false);
console.log(false && false || true && false);
console.log(false || false && true && false);
console.log(false && false || true || false);
console.log(false || false || true && false);
console.log(false || false && true || false);
console.log(false || false || true || false);

const textas12 = "---------------3x2-------------------------"
console.log(textas12)

console.log(false && true && false && false);
console.log(false && true && false || false);
console.log(false && true || false && false);
console.log(false || true && false && false);
console.log(false && true || false || false);
console.log(false || true || false && false);
console.log(false || true && false || false);
console.log(false || true || false || false);

const textas13 = "---------------3x3-------------------------"
console.log(textas13)

console.log(true && false && false && false);
console.log(true && false && false || false);
console.log(true && false || false && false);
console.log(true || false && false && false);
console.log(true && false || false || false);
console.log(true || false || false && false);
console.log(true || false && false || false);
console.log(true || false || false || false);

const textas14 = "---------------3x4-------------------------"
console.log(textas14)

console.log(false && false && false && false);
console.log(false && false && false || false);
console.log(false && false || false && false);
console.log(false || false && false && false);
console.log(false && false || false || false);
console.log(false || false || false && false);
console.log(false || false && false || false);
console.log(false || false || false || false);

const textas15 = "---------------4x1-------------------------"
console.log(textas15)

console.clear();
console.clear();

















