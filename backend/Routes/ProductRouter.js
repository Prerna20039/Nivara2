const ensureAuthenticated = require('../Middlewares/Auth');


const router = require('express').Router();



router.get('/', ensureAuthenticated, (req,res)=> {
    console.log("--- user details --- ",req.user);
    res.status(200).json([
        {
            name : "mobile",
            prices : 10000
        },
        {
            name : "tv",
            prices : 70000

        }
    ])
});


module.exports = router;