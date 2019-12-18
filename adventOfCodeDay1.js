const massArr = [
    106947,
    129138,
    56893,
    75116,
    96763,
    108475,
    62574,
    137915,
    73556,
    69652,
    74098,
    131265,
    77267,
    72940,
    74859,
    128578,
    128024,
    125887,
    140457,
    97314,
    126150,
    148019,
    116715,
    54231,
    98892,
    73242,
    131621,
    122572,
    107437,
    75142,
    103755,
    141267,
    141024,
    80452,
    60619,
    104099,
    51541,
    63863,
    106932,
    75346,
    77073,
    57263,
    128967,
    124504,
    79388,
    124167,
    100073,
    97108,
    74180,
    137778,
    73793,
    131458,
    67579,
    102695,
    143794,
    96093,
    64490,
    96122,
    88901,
    53381,
    77850,
    96527,
    51943,
    107511,
    120126,
    64622,
    63053,
    116916,
    83990,
    143278,
    72390,
    101767,
    135915,
    126354,
    109714,
    56139,
    129849,
    89505,
    115213,
    145001,
    56506,
    83700,
    59071,
    80895,
    143177,
    120738,
    78270,
    100436,
    108389,
    62456,
    145335,
    102210,
    111779,
    95937,
    52626,
    134932,
    61925,
    97086,
    50211,
    96413,
]

let fuelNeeded = 0;



// for (let i = 0; i < massArr.length; i++){
//     newFuel.push(Math.floor(massArr[i]/3)-2)
// }
// for (let i = 0; i < newFuel.length; i++){
//     if(Math.floor(newFuel[i]/3)-2 > 0){
//         newFuelTwo.push(Math.floor(newFuel[i]/3)-2)
//     }
// }


let newFuel = massArr.map(function (num){
    return Math.floor(num/3)-2;
})
let newFuelTwo = newFuel.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelThree = newFuelTwo.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelFour = newFuelThree.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelFive = newFuelFour.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelSix = newFuelFive.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelSeven = newFuelSix.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelEight = newFuelSeven.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})
let newFuelNine = newFuelEight.map(function (num){
    if (Math.floor(num/3)-2 > 0){
        return Math.floor(num/3)-2
    };
})

for (let i = 0; i < newFuel.length; i++){
    if(newFuel[i] != undefined){
        fuelNeeded += newFuel[i]
    }
}
for (let i = 0; i < newFuelTwo.length; i++){
    if(newFuelTwo[i] != undefined){
        fuelNeeded += newFuelTwo[i]
    }
}
for (let i = 0; i < newFuelThree.length; i++){
    if(newFuelThree[i] != undefined){
        fuelNeeded += newFuelThree[i]
    }
}
for (let i = 0; i < newFuelFour.length; i++){
    if(newFuelFour[i] != undefined){
        fuelNeeded += newFuelFour[i]
    }
}
for (let i = 0; i < newFuelFive.length; i++){
    if(newFuelFive[i] != undefined){
        fuelNeeded += newFuelFive[i]
    }
}
for (let i = 0; i < newFuelSix.length; i++){
    if(newFuelSix[i] != undefined){
        fuelNeeded += newFuelSix[i]
    }
}
for (let i = 0; i < newFuelSeven.length; i++){
    if(newFuelSeven[i] != undefined){
        fuelNeeded += newFuelSeven[i]
    }
}
for (let i = 0; i < newFuelEight.length; i++){
    if(newFuelEight[i] != undefined){
        fuelNeeded += newFuelEight[i]
    }
}
for (let i = 0; i < newFuelNine.length; i++){
    if(newFuelNine[i] != undefined){
        fuelNeeded += newFuelNine[i]
    }
}

console.log(fuelNeeded)

console.log(newFuel);
console.log(newFuelTwo);
console.log(newFuelThree);
console.log(newFuelFour);
console.log(newFuelFive);
console.log(newFuelSix);
console.log(newFuelSeven);
console.log(newFuelEight);
console.log(newFuelNine);
