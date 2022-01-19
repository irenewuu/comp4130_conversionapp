// cm to feet
const cmToFeet = (feet, cm) => {
    const convert ={
        Feet: 0.0328084,
        Centimeter: 30.48
    }
    return feet * convert[cm]
} 
module.exports = cmToFeet