const express = require("express");
const router = express.Router();
const { 
    Homepage,
    ConvertingCmFt,
    ConvertingFtIn,
    ConvertingInCm,
    ConvertingMiKm
 } = require('../Controllers/conversion')

router.get('/', Homepage)

// younsoo
router.get('/cm-ft-conversion', ConvertingCmFt)

// irene
router.get('/ft-in-conversion', ConvertingFtIn)

// hyerin
router.get('/in-cm-conversion', ConvertingInCm)

// chisaki
router.get('/mi-km-conversion', ConvertingMiKm)


module.exports = router

