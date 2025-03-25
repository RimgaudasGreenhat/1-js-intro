const Mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
const Mokinys2 = ['Rima', 8, 3, 5, 4, 7];
const Mokinys3 = ['Gabija', 3, 3, 3, 4, 4];
const Mokinys4 = ['Rokas', 7, 6, 2, 3, 9];
const Mokinys5 = ['Karina', 5, 4, 6, 3, 7];
const Mokinys6 = ['Aiste', 4, 5, 8, 2, 3];

function MokinioVidurkis (mokinys){
console.log('Mokinio vardas: ' + mokinys[0]);
let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys [5])/5;
if(vidurkis>=3.5){
    console.log(mokinys[0] + ' ' + 'išlaikė. Jo/Jos vidurkis:' + vidurkis)
}
else
{
let vidurkisNaujas = ((vidurkis*5)+10)/6;
console.log(mokinys[0] + 'neišlaikė. Jo/Jos dabartinis vidurkis:' + vidurkis);
if(vidurkisNaujas>=3.5)
{
    console.log(mokinys[0] + ' ' + 'išlaikytų kursą jeigu gautų vieną dešimtuką');
}
}
}

MokinioVidurkis(Mokinys1)
MokinioVidurkis(Mokinys2)
MokinioVidurkis(Mokinys3)
MokinioVidurkis(Mokinys4)
MokinioVidurkis(Mokinys5)
MokinioVidurkis(Mokinys5)

console.log('------------------norimi filmai-------------------------------------------------')


const Filmas1 = ['Shrek 2', 'komedija', 89];
const Filmas2 = ['Saw2', 'siaubo filmas', 38];
const Filmas3 = ['My Dead Friend Zoe', 'komedija', 95];
const Filmas4 = ['Borderlands', 'komedija', 10];
const Filmas5 = ['Aliens', 'siaubo filmas', 95];

const norimasFilmoZanras = 'komedija';
const norimasIvertinimas = 80;

function PotencialusFilmai (Filmas){
console.log('Dominantys Filmas: ' + Filmas[0]);
let norimasfilmas = 0 + Filmas[2];
if(norimasfilmas >= norimasIvertinimas){
    console.log(Filmas[0] + ' ' + 'Tau gali patikti, jo ivertinimas yra:' + ' ' + Filmas[2])
}
else
{
console.log(Filmas[0] + ' ' + 'Tau gali nepatikti, jo ivertinimas yra:' + ' ' + Filmas[2]);

}
}

PotencialusFilmai(Filmas1);
PotencialusFilmai(Filmas3);
PotencialusFilmai(Filmas4);





