const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>  {
    res.send(console.log('aquitodobien'));
    return res.json("coneccion exitosa")
});

module.exports = router;