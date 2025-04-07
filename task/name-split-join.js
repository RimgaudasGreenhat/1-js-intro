









function correctSentence(text)
{   const parts = text.split(': ')
    console.log(parts);
    const names = parts[1]
        .slice(0,-1)
        .toLowerCase()
        .split(', ');
   
   
    for(let i = 0; i < names.length; i++)
        {
            const name = names[i];
            const firstLetter = name[0].toUpperCase();
            const restName = name.slice(1);
            const newName = firstLetter + restName;
            names[i] = newName;
            console.log(name, '-----', firstLetter, restName);
            
        }
    return parts [0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.'));
