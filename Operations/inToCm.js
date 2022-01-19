// Inch to Centimeter
const inToCm = (amount, conversion) => {
    const rates = {
        Inch: 0.3937007874,
        Centimeter: 2.54
    }
    return amount * rates[conversion];
}

module.exports = inToCm