// Centimeter to Feet: Younsooo
const CmFtConversion = (amount, conversion) => {
    const rates = {
        Feet: 0.03280839895013123,
        Centimeter: 30.48
    }
    return amount * rates[conversion];
} 
module.exports = CmFtConversion