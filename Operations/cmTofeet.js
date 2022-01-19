// Celsius to  Fahrenheit
const cmToFeet = (feet, cm) => {
    const convert ={
        feet: 0.0328084,
        cm: 30.48
    }
    return feet * convert[cm]
} 
module.exports = cmToFeet