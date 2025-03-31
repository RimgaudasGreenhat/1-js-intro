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

const norimasFilmoZanras = 'komedija'; //kodėl funkcija tesiog nepagauna šito žodžio kaip norimo rezultato if'e?
const norimasIvertinimas = 80;

function PotencialusFilmai (Filmas)
    {
console.log('Dominantys Filmas: ' + Filmas[0]);
let norimasfilmas = 0 + Filmas[2];
    if(Filmas[2] >= norimasIvertinimas && Filmas[1] === norimasFilmoZanras)
    {
    console.log(Filmas[0] + ' ' + 'Tau gali patikti, jo ivertinimas yra:' + ' ' + Filmas[2])
    }
    else
    {
console.log(Filmas[0] + ' ' + 'Tau gali nepatikti, jo ivertinimas yra:' + ' ' + Filmas[2]);

    }
}

PotencialusFilmai(Filmas1);
PotencialusFilmai(Filmas2);
PotencialusFilmai(Filmas3);
PotencialusFilmai(Filmas4);
PotencialusFilmai(Filmas5);

/////Nesigavo (gavosi tik pagal ivertinima bet ne pagal zanra, kodel?)

console.log('-----------------------------------------------------------')

const Filmas6 = ['Shrek 2', 'komedija', 89];
const Filmas7 = ['Saw2', 'siaubo filmas', 38];
const Filmas8 = ['My Dead Friend Zoe', 'komedija', 95];
const Filmas9 = ['Borderlands', 'komedija', 10];
const Filmas10 = ['Aliens', 'siaubo filmas', 95];


const norimasFilmoZanras1 = 'komedija';
const norimasIvertinimas1 = 80;



function FilmuIsrinkimas (filmasA, filmasB, filmasC, balas, zanras)
    {
        let arYraFilmas = false; //kodel sita kintamaji reikia prisirasyt?
        if(filmasA[2] >= balas && filmasA [1] == zanras)
            {
                console.log ('Jums tinkantis filmas:' + filmasA[0]);
                arYraFilmas = true
            }
            if(filmasB[2] >= balas && filmasB [1] == zanras)
            {
                    console.log ('Jums tinkantis filmas:' + filmasB[0]);
                    arYraFilmas = true
            }
            if(filmasC[2] >= balas && filmasC [1] == zanras)
            {
                    console.log ('Jums tinkantis filmas:' + filmasC[0]);
                    arYraFilmas = true
            }
            if(arYraFilmas = false)
            {
                        console.log ('Jums tinkamų filmų nėra');
                        
            }

    } 


FilmuIsrinkimas(Filmas6, Filmas8, Filmas10, norimasIvertinimas1, norimasFilmoZanras1)


