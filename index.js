const { feetToInch, inToCm, mileToKm, cmToFeet } = require('./Operations')

const http = require('http')
const url = require('url')

const app = http.createServer((req, res)=>{
    const queries = url.parse(req.url, true).query
    console.log(queries)

    data = {value: 20}


    // ===============================================
    // this reads the pathname only and not whatevers behind it
    switch(url.parse(req.url).pathname) {
        case '/':
            res.end('welcome')
            break
        case '/cm-to-ft':
            if(queries.Centimeter) {
                res.write("Centimeter to Feet: ") 
                res.end(String(cmToFeet(queries.Centimeter,"Feet") + "ft"))

            } else if(queries.Feet) {
                res.write("Feet to Centimeter: ") 
                res.end(String(cmToFeet(queries.Feet,"Centimeter") + "cm"))

            } else {
                res.write("error, please clarify if you want Feet or Centimeter conversion. ") 
                res.end("example: Centimeter=30.48")
            }
            break;

        case '/ft-to-in':
            if(queries.Inch) {
                res.write("Inch to Feet: ") 
                res.end(String(feetToInch(queries.Inch,"Feet") + "ft"))
                
            } else if(queries.Feet) {
                res.write("Feet to Inch: ") 
                res.end(String(feetToInch(queries.Feet,"Inch") + "in"))

            } else {
                res.write("error, please clarify if you want Feet or Inch conversion. ") 
                res.end("example: Inch=12")
            }
            break;

        case '/in-to-cm':
            if(queries.Inch) {
                res.write("Inch to Centimeter: ") 
                res.end(String(inToCm(queries.Inch,"Centimeter") + "cm"))
                
            } else if(queries.Centimeter) {
                res.write("Centimeter to Inch: ") 
                res.end(String(inToCm(queries.Centimeter,"Inch") + "in"))

            } else {
                res.write("error, please clarify if you want Centimeter or Inch conversion. ") 
                res.end("example: Inch=12")
            }
            break;

        case '/miles-to-km':
            if(queries.Mile) {
                res.write("Mile to Kilometer: ") 
                res.end(String(mileToKm(queries.Mile,"Kilometer") + "km"))
                
            } else if(queries.Kilometer) {
                res.write("Kilometer to Mile: ") 
                res.end(String(mileToKm(queries.Kilometer,"Mile") + "mi"))

            } else {
                res.write("error, please clarify if you want Kilometer or Mile conversion. ") 
                res.end("example: Mile=12")
            }
            break;
        
        default:
            res.end('unknown url')
        }

})

app.listen(3000)


// // Irene : Feet to Inch
// console.log(feetToInch(3, "Inch"))

// // Hyerin : Centimeter to Feet
// console.log(cmToFeet(18, "Centimeter"))

// // Youn Soo : Inch to Centimeter
// console.log(inToCm(20, "Centimeter"))

// // Chisaki : Mile to Kilometer
// console.log(mileToKm(10, "Kilometer"))