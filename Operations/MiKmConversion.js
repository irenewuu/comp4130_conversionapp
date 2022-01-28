// Mile to Kilometer: Chisaki
const MiKmConversion = (length, output)=>{
    const convert = {
        Mile:0.621371,
        Kilometer:1.609344
    }
    return length * convert [output];
}

module.exports = MiKmConversion