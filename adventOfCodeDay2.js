//array of codes
var intCode = [
    1,0,0,3,
    1,1,2,3,
    1,3,4,3,
    1,5,0,3,
    2,1,6,19,
    2,19,6,23,
    1,23,5,27,
    1,9,27,31,
    1,31,10,35,
    2,35,9,39,
    1,5,39,43,
    2,43,9,47,
    1,5,47,51,
    2,51,13,55,
    1,55,10,59,
    1,59,10,63,
    2,9,63,67,
    1,67,5,71,
    2,13,71,75,
    1,75,10,79,
    1,79,6,83,
    2,13,83,87,
    1,87,6,91,
    1,6,91,95,
    1,10,95,99,
    2,99,6,103,
    1,103,5,107,
    2,6,107,111,
    1,10,111,115,
    1,115,5,119,
    2,6,119,123,
    1,123,5,127,
    2,127,6,131,
    1,131,5,135,
    1,2,135,139,
    1,139,13,0,
    99,2,0,14,0
];

//array [1] and [2] values to run.
let noun = 12;
let verb = 2;

//copy of original array
let intCodeCopy = [...intCode]


//rules for running program
//origPos determines add (1) or multiply(2)
//the result of the funtion gets stored in outputPos
function runRules(origPos, valueOne, valueTwo, outputPos){
    let val1 = intCodeCopy[valueOne];
    let val2 = intCodeCopy[valueTwo];

    if (origPos === 1){
        intCodeCopy[outputPos]=val1 + val2;
    } else if (origPos === 2){
        intCodeCopy[outputPos]=val1 * val2;
    }
};

//when the function runs 99, the program stops
//runs through the array in series of four values
function run(){
    for(let i = 0; i < intCodeCopy.length; i+=4){
        if (intCodeCopy[i]===99){
            break;
        }
        runRules(intCodeCopy[i], intCodeCopy[i+1], intCodeCopy[i+2], intCodeCopy[i+3]);
    }    
};

intCodeCopy[1] = noun;
intCodeCopy[2] = verb;

run();
console.log(intCodeCopy[0]);

//part 2 - test different noun and verb values, insert value into memory and run until expected output (19690720) is achieved.

const expected = 19690720

for (let noun = 0; noun <= 99; noun++){
    let solved = false;
    for (let verb = 0; verb <= 99; verb++){
        //reset copied array
        intCodeCopy = [...intCode];
        intCodeCopy[1]=noun;
        intCodeCopy[2]=verb;

        run();
        let functionOutput = intCodeCopy[0];

        if (functionOutput === expected){
            solved = true;
            console.log(noun, verb)
            break;
        }
    }
    if(solved){
        break;
    }
}
console.log(`Noun and Verb to reach ${intCodeCopy[0]} are ${noun} and ${verb}`);
console.log(`The computed value is ${100 * noun + verb}`);

