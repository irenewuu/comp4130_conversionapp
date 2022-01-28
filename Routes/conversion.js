const express = require("express");
const router = express.Router();
const { FtInConversion, InCmConversion, MiKmConversion, CmFtConversion } = require('../Operations')

router.get('/', (req, res)=> {
    res.end(`Welcome!
Please type one of the following in the search bar:
cm-ft-conversion (then add ?Centimeter= or ?Feet= after it, along with the value you want to convert)
ft-in-conversion (then add ?Feet= or ?Inch= after it, along with the value you want to convert)
in-cm-conversion (then add ?Inch= or ?Centimeter= after it, along with the value you want to convert)
mi-km-conversion (then add ?Mile= or ?Kilometer= after it, along with the value you want to convert)
`)
})

router.get('/cm-ft-conversion', (req, res)=> {
        if(req.query.Centimeter) {
        res.write("Centimeter to Feet: ") 
        res.end(String(CmFtConversion(req.query.Centimeter,"Feet") + "ft"))

    } else if(req.query.Feet) {
        res.write("Feet to Centimeter: ") 
        res.end(String(CmFtConversion(req.query.Feet,"Centimeter") + "cm"))

    } else {
        res.write("Please clarify if you want Feet or Centimeter conversion. ") 
        res.end("example: Centimeter=30.48")
    }
})

router.get('/ft-in-conversion', (req, res)=> {
    if(req.query.Inch) {
        res.write("Inch to Feet: ") 
        res.end(String(FtInConversion(req.query.Inch,"Feet") + "ft"))
        
    } else if(req.query.Feet) {
        res.write("Feet to Inch: ") 
        res.end(String(FtInConversion(req.query.Feet,"Inch") + "in"))

    } else {
        res.write("Please clarify if you want Feet or Inch conversion. ") 
        res.end("example: Inch=12")
    }
})

router.get('/in-cm-conversion', (req, res)=> {
    if(req.query.Inch) {
        res.write("Inch to Centimeter: ") 
        res.end(String(InCmConversion(req.query.Inch,"Centimeter") + "cm"))
        
    } else if(req.query.Centimeter) {
        res.write("Centimeter to Inch: ") 
        res.end(String(InCmConversion(req.query.Centimeter,"Inch") + "in"))

    } else {
        res.write("Please clarify if you want Centimeter or Inch conversion. ") 
        res.end("example: Inch=12")
    }
})

router.get('/mi-km-conversion', (req, res)=> {
    if(req.query.Mile) {
        res.write("Mile to Kilometer: ") 
        res.end(String(MiKmConversion(req.query.Mile,"Kilometer") + "km"))
        
    } else if(req.query.Kilometer) {
        res.write("Kilometer to Mile: ") 
        res.end(String(MiKmConversion(req.query.Kilometer,"Mile") + "mi"))

    } else {
        res.write("Please clarify if you want Kilometer or Mile conversion. ") 
        res.end("example: Mile=12")
    }
})


module.exports = router

