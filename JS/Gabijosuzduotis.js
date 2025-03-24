const Mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
const Mokinys2 = ['Rima', 8, 3, 5, 4, 7];
const Mokinys3 = ['Gabija', 3, 3, 3, 4, 4];

function MokinioVidurkis (mokinys){
console.log('Mokinio vardas: ' + mokinys[0]);
let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys [5])/5;
if(vidurkis>=3.5){
    console.log(mokinys[0] + 'išlaikė. Jo vidurkis:' + vidurkis)
}
else
{
let vidurkisNaujas = ((vidurkis*5)+10)/6;
console.log(mokinys[0] + 'neišlaikė. Jo dabartinis vidurkis:' + vidurkis);
if(vidurkisNaujas>=3.5)
{
    console.log(mokinys[0] + 'išlaikytų kursą jeigu gautų vieną dešimtuką');
}
}
}