/*
Reikalinga funkcija, kuri gauna vartojo amziu (metais) ir atitinkamai grazina zodi:
-suauges
-vaikas
Amzius ribos kriterijus >= 18 metu.
*/

function isAdult(age) {
if (age >= 18) {
    return 'suauges';
} else {
    return 'vaikas';
}
}
console.log(isAdult(99), '-->', 'suauges');
console.log(isAdult(18), '-->', 'suauges');
console.log(isAdult(17), '-->', 'vaikas');
console.log(isAdult(1), '-->', 'vaikas');