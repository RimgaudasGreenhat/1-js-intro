for (let i = 1; i <= 10; i++ )
    {
        console.log('skaiciai iki 10:', i)
    }
console.log('-------------------------');


for (let i = 10; i >= 1; i-- )
    {
        console.log('skaiciai nuo 10 iki 1:', i)
    }
console.log('-------------------------');

for (let i = 0; i <= 20; i++ )
    {
        if(i%2 ===0)
            {
                console.log(i)//kodel return negalima naudot?
            }
            else
            {
                console.log('')
            }
    }
    

console.log('-------------------------');

for (let i = 0; i <= 20; i++ )
    {
        if(i%2 ===0)
            {
                console.log('')//kodel return negalima naudot?
            }
            else
            {
                console.log(i)
            }
    }
console.log('-------------------------');

for (let i=1; i <= 10; i++)
    {
        console.log(`skaiciaus ${i} kvadratas yra lygus` + i*i);
    }
console.log('-------------------------');

for (let i=1; i <= 10; i++)
    {
        console.log(`skaiciaus ${i} kubas yra lygus` + i*i*i);
    }

console.log('-------------------------');

for (let i = 7; i === 7; i++)
    {
        console.log('i:', i);

        for (let n = 1; n <= 10; n++)
            {
                console.log(`${i}*${n} = ${i*n}`);
            }
    }


    console.log('-------------------------');

    let kint = ''

    for (let i=1; i <= 5; i++)
        {
            console.log(kint += '*');
        }
    console.log('-------------------------');



    let kint2 = '*****'

    for (let i=5; i >= 1; i--)
        {
            console.log(kint2 -= '*');///////// kodel taip neveikia? gaunu NaN turiu labai durna iproti uzsisedet prie uzdavinio kuris man nesigauna ir bandyt issiaiskint pats tik su info kuria mokinomes (RELAX AND MOVE ON!!!!)
        }
        
    console.log('-------------------------');



for (let i= 0; i <= 50; i++)
    {
        if (i %3 === 0)
            {
                console.log(i)
            }
            
    }
console.log('-------------------------');

for (let i= 0; i <= 50; i++)
    {
        if (i %5 === 0)
            {
                console.log(i)
            }
            
    }
console.log('-------------------------');

for (let i= 0; i <= 100; i++)
    {
        if (i %3 === 0 && i%5 === 0)
            {
                console.log(i)
            }
            
    }

console.log('-------------------------');

let zodis = 'Hello, World!'

    for (let i=1; i <= 5; i++)
        {
            console.log(zodis);
        }

console.log('-------------Sunkesnes uzduotys----------------');


for (let i= 0; i <= 100; i++)
    {
        if (i %4 === 0)
            {
                console.log('Fizz')
            }
            else
            {
                console.log(i)
            }
            
    }

console.log('-------------------------');

for (let i= 0; i <= 100; i++)
    {
        if (i %3 === 0)
            {
                console.log('Fizz')
            }
            if(i %5 === 0)
                {
                    console.log('Buzz')
                }
                if(i %3 === 0 && i%5 === 0)
                    {
                        console.log('FizzBuzz')
                    }
            else
            {
                console.log(i)
            }
            
    }
console.log('-------------------------');

let w1 = 0
let w2 = 1
let w3 = 2

for (let i= 1; i <= 10; i++)
    {
        if(i === 1)
            {
                console.log(w2);
            }
            else if(i === 2)
            {
                console.log(w3) ///suprantu del ko taip daroma bet blemba nebuciau ismastes as sito
            }
            else
            {
                w1 = w2 + w3;
                w2 = w3
                w3 = w1
                console.log(w1);
            }
    }

console.log('-------------------------');

for (let i= 1; i <= 20; i++)
    {
        if (i %2 === 0)
            {
                console.log(i + (' ') + 'Even')
            }
            
            else
            {
                console.log(i + (' ') + 'Odd')
            }
            
    }



