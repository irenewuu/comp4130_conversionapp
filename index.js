const { FtInConversion, InCmConversion, MiKmConversion, CmFtConversion } = require('./Operations')

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
            res.end(`Welcome!
Please type one of the following in the search bar:
cm-ft-conversion (then add ?Centimeter= or ?Feet= after it, along with the value you want to convert)
ft-in-conversion (then add ?Feet= or ?Inch= after it, along with the value you want to convert)
in-cm-conversion (then add ?Inch= or ?Centimeter= after it, along with the value you want to convert)
mi-km-conversion (then add ?Mile= or ?Kilometer= after it, along with the value you want to convert)

`)
            break
        case '/cm-ft-conversion':
            if(queries.Centimeter) {
                res.write("Centimeter to Feet: ") 
                res.end(String(CmFtConversion(queries.Centimeter,"Feet") + "ft"))

            } else if(queries.Feet) {
                res.write("Feet to Centimeter: ") 
                res.end(String(CmFtConversion(queries.Feet,"Centimeter") + "cm"))

            } else {
                res.write("Please clarify if you want Feet or Centimeter conversion. ") 
                res.end("example: Centimeter=30.48")
            }
            break;

        case '/ft-in-conversion':
            if(queries.Inch) {
                res.write("Inch to Feet: ") 
                res.end(String(FtInConversion(queries.Inch,"Feet") + "ft"))
                
            } else if(queries.Feet) {
                res.write("Feet to Inch: ") 
                res.end(String(FtInConversion(queries.Feet,"Inch") + "in"))

            } else {
                res.write("Please clarify if you want Feet or Inch conversion. ") 
                res.end("example: Inch=12")
            }
            break;

        case '/in-cm-conversion':
            if(queries.Inch) {
                res.write("Inch to Centimeter: ") 
                res.end(String(InCmConversion(queries.Inch,"Centimeter") + "cm"))
                
            } else if(queries.Centimeter) {
                res.write("Centimeter to Inch: ") 
                res.end(String(InCmConversion(queries.Centimeter,"Inch") + "in"))

            } else {
                res.write("Please clarify if you want Centimeter or Inch conversion. ") 
                res.end("example: Inch=12")
            }
            break;

        case '/mi-km-conversion':
            if(queries.Mile) {
                res.write("Mile to Kilometer: ") 
                res.end(String(MiKmConversion(queries.Mile,"Kilometer") + "km"))
                
            } else if(queries.Kilometer) {
                res.write("Kilometer to Mile: ") 
                res.end(String(MiKmConversion(queries.Kilometer,"Mile") + "mi"))

            } else {
                res.write("Please clarify if you want Kilometer or Mile conversion. ") 
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