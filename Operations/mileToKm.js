const mileToKm = (length, output)=>{
    const convert = {
        mile:0.621371,
        km:1.609344
    }
    return length * convert [output];
}

module.exports = mileToKm