

function penki() {   
    return 5;}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!

function hiPerson(name){
    return `Labas, ${name}!`;
}


console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));

//2+2 = 4
//7+5 = 12

function sum(num1,num2) {
    return num1 + num2;
}

const e= sum(2,2);
console.log(e);

const f= sum(7,5);
console.log(f);

console.clear();

//100 -> 121 Eur
//200 -> 242 Eur
//73 -> 88.33 Eur


function priceWithVat(price) {
    return price * 1.21 + ' Eur'
}

const p1 = priceWithVat(100);
console.log(p1);

const p2 = priceWithVat(200);
console.log(p2);

const p3 = priceWithVat(73);
console.log(p3);

// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.


function nameLenght(name){
    const size = name.length;
return `Zodis "${name}" yra sudarytas is ${size} raidziu.`;
}

const nl1= nameLenght('Jonas');
console.log(nl1);



// 5 -> Gautas skaicius: 5.

function gotNumber(n){
    //return 'Gautas skaicius: ' + n + '.';
    return `Gautas skaicius: ${n}.`;
}

const gn1 = gotNumber(5);

console.log(gn1);

// 2,2 -> 2 + 2 = 4

function sum(a,b){
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(sum(2,2))

//namu darbai- padaryti analogus daugybai, dalybai ir atimtim



