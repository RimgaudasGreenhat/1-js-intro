
function isrinktiRaides(zodis,raide)
{
    if (typeof zodis !== 'string')
        {
            console.log('Pirmasis kintamasis yra netinkamo tipo.')
        }
        else if (zodis.length === 0 && zodis.length > 100)
            {
                console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio.');
                
            }
            else if (typeof raide !== 'number')
                {
                    console.log('Antrasis kintamasis yra netinkamo tipo.');
                    
                }
                else if (raide <= 0)
                    {
                        console.log('Antrasis kintamasis turi būti didesnis už nulį.');
                        
                    }
                    else if (zodis.length < raide)
                        {
                            console.log('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
                            
                        } 
                        else
        {
            for (i = raide - 1 ; i < zodis.length; i+=raide)
                {
                    let rinkinys = zodis[i] + (zodis[i+raide] + (zodis[i+raide*2] + (zodis[i+raide*3]) ));
                    return rinkinys; 
                }
                
        }
}


console.log(isrinktiRaides('abcdef',2));
console.log(isrinktiRaides('abcdefghijkl',3));
console.log(isrinktiRaides('abc',0));
console.log(isrinktiRaides('abc',4));
console.log(isrinktiRaides(1564,2));
