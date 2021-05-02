const numbers = process.argv.slice(2);
//The numbers we will use to convert
let stringArray = [];
//To see if all inputs are valid
let isVaild = true;
//This map is used to turn a digit to a word
const numbersMap = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//if statment to check numbers are being entered.
if (numbers.length == 0) {

    console.log('Please enter in some vaild numbers');
    return;
}

//Let's get one number at a time by looping
numbers.forEach(function(number) {
    //Checking to see if its a real number
    if(!isNaN(Number(number))){
        //Split each number to an array of digits
        const splitNumbers = `${number}`.split('');
        //This is going to hold variables
        let saveOutput = '';
        // Looping through each single number 
        splitNumbers.forEach(function(digit) {
            // Mapping output with the digit in words
            const output = numbersMap[digit];

            //appending the output
            saveOutput += output;
        });
        //Adding the output into an array
        stringArray.push(saveOutput);
    } else {
        console.log(number + ' is not a number');
        //Number was not a integer
        isVaild = false;
        return;
    }
});

//Only if output is vaild
if(isVaild){
    //seperating each output by a comma
    const finalString = stringArray.join(',')
    //Printing
    console.log(finalString)
}