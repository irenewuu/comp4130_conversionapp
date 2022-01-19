// converting feet to inch

const feetToInch = (amount, conversion) => {
    const rates = {
        Feet: 0.0833333,
        Inch: 12
    }
    return amount * rates[conversion];
}
module.exports = feetToInch