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

console.clear();


// 2 uzduotis isvesti sveikuosius skaicius grafiskai
let u1 = 0
let u2 = 0
let u3 = 0
let u4 = 0
function teigSkaiciai(skaiciai)
{
    for (let i=0; i< skaiciai.length; i++)
        {
            if (skaiciai[i] = 1)
                {
                    u1 ++ 
                } 
                if(skaiciai[i] = 2)
                    {
                        u2 ++
                    }
                    if(skaiciai[i] = 3)
                        {
                            u3 ++
                        }
                        if(skaiciai[i] = 2)
                            {
                                u4 ++
                            } return u1, u2, u3, u4
        }
}

console.log('------------------');

const e = [1, 1, 1, 2, 3, 3, 3, 4];
console.log(teigSkaiciai(e));
/*bandziau tesiog pasidaryt kad isvestu kiek yra tam tikru skaiciu, bet nepaeina kazkakas negerai ir nesuprantu kur yra klaida logikoj*/




//3 uzduotis temperaturos

const japan = [5, 6, 4, 8, 7, 6, 4]
const italy = [11, 13, 16, 14, 15, 17, 10]
const spain = [18, 17, 19, 22, 23, 25, 19]
const antarctica = [-30, -41, -35, -37, -28, -27, -19]
const alabama = [10, 12, 11, 16, 17, 15, 19]
const germany = [8, 6, 11, 7, 8, 3, 1]
const ukraine = [4, 5, 3, 6, 1, 10, 11]

function tempAverage(day)
{
    return (japan[day - 1] + italy[day - 1] + spain[day - 1] + antarctica[day - 1] + alabama[day - 1] + germany[day - 1] + ukraine[day - 1])/ 7;
}
console.log(tempAverage(1));
console.log(tempAverage(4));



function tempDidziausia(miestas)
{   let didziausiaTemp = miestas[0];
   for(i = 0; i < miestas.length; i++)
    {
        if(miestas[i] > didziausiaTemp)
            {
                didziausiaTemp = miestas[i]; /// kazkodel neupdatina man didziausios temperaturos tesiog issima pirma arejaus reiksme ir viskas wtf? gaunu tesiog 18
            }
          
    } return didziausiaTemp;
}
console.log(tempDidziausia(spain));



function tempMaziausia(miestas)
{   let maziausiaTemp = miestas[0];
   for(i = 0; i < miestas.length; i++)
    {
        if(miestas[i] < maziausiaTemp)
            {
                maziausiaTemp = miestas[i]; 
            }
          
    } return maziausiaTemp
}
console.log(tempMaziausia(spain));



console.log('------------------');


function biggestLowestTemp(miestas)
{   let didziausiaTemp = miestas[0];
    let maziausiaTemp = miestas[0];
    let savaitesDienaBig = miestas[0];
    let savaitesDienaSmal = miestas[0];
    for(i = 0; i < miestas.length; i++)
     {
         if(miestas[i] > didziausiaTemp)
             {
                 didziausiaTemp = miestas[i] 
             }
             if(miestas[i] < maziausiaTemp)
                {
                    maziausiaTemp = miestas[i]; /// cia jau per sunkiai pasidariau nes netaip supratau uzduoti, dabar reiktu man prisiskirt indexus prie kekvienos temperaturos ir juos isvers
                }
                if (miestas[i] > savaitesDienaBig)
                    {
                        savaitesDienaBig =  (i-1) 
                    } 
                    if (miestas[i] < savaitesDienaSmal)
                        {
                            savaitesDienaSmal =  (i+1)
                        }
           
     } return [didziausiaTemp, savaitesDienaBig, maziausiaTemp, savaitesDienaSmal];
      
 }
 console.log(biggestLowestTemp(spain));
 console.log(biggestLowestTemp(japan));
 



function tempWeekAverage(miestas)
{
    return (miestas[0] + miestas[1] + miestas[2] + miestas[3] + miestas[4] + miestas[5] + miestas[6])/ 7;
}
console.log(tempWeekAverage(spain));
console.log(tempWeekAverage(japan));


console.log('------------------');

































