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
            // res.end(JSON.stringify(data))
            // returns whats the data object
            // res.end("centimeter to feet")
            // res.end(JSON.stringify(queries))
            res.end(String(cmToFeet(queries.Centimeter,"Feet")))
            break
        case '/ft-to-in':
            // res.end(String(convert(queries.data)))
            // res.send('hel');
            // res.write(JSON.stringify(Object.values(queries)[1]))
            res.write("feet to inch: ") 
            res.end(String(feetToInch(queries.feet, "Inch")))
            break;
            
// console.log(mileToKm(10, "Kilometer"))
            res.end('stop')

            
            break
        case '/in-to-cm':
            res.end('inch to centimeter')
            break
        case '/miles-to-km':
            //res.end('miles to kilometer')
            res.end(String(mileToKm(queries.mile,"Kilometer")))
            break
        
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