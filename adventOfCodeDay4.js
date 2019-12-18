//input >=171309 and <= 643603

let startingNum = 171309;
let endingNum = 643603;

let passwordOptionCount = 0;

for (let i = startingNum; i <= endingNum; i++){

    startingNum++;

    let consecutiveNum = false;
    let increasedNum = true;

    let startingString = startingNum.toString();

    const nums = [...startingString]

    const count = {};
    nums.map((x) => count[x] = (count[x]||0)+1);
    let duplicates = Object.entries(count).find(dups => dups[1]==2);

    for(let n = 0; n < startingString.length; n++){
        if (startingString[n] === startingString[n+1]) consecutiveNum = true;
        if (+startingString[n] > +startingString[n+1]) increasedNum = false;
    }
    if (increasedNum && consecutiveNum && duplicates) passwordOptionCount++;
}

console.log(`The number of password options is: ${passwordOptionCount}`)