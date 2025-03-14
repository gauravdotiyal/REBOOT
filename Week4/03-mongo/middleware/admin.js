// Middleware for handling auth
const {Admin} =require('../db/index')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username; // gauravdotiyal
    const password=req.headers.password;// 12345

    Admin.findOne({
        username:username,
        password:password,
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"Admin Doesn't Exist "
            })
        }
    })

}

module.exports = adminMiddleware;