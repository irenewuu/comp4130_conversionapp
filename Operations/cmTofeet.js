// cm to feet
const cmToFeet = (amount, conversion) => {
    const rates = {
        Feet: 0.2,
        Centimeter: 2
    }
    return amount * rates[conversion];
} 
module.exports = cmToFeet