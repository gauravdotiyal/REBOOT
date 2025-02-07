const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User ,Course} = require("../db");
const {JWT_SECRET}=require('../config')
const jwt=require('jsonwebtoken')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    await Admin.create({
        username:username,
        password:password,
    })  
    res.json({
            msg:"Admin Created Successfully"
    })
    
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.find({
        username:username,
        password :password
    })

    if(user){
        const token=jwt.sign({
            username,
        },JWT_SECRET)
    
        res.json({
            token,
        })
    }
    else{
        res.json({
            msg:"Invalid username or password"
        })
    }
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;
    
    const newCourse=await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
    })
    
    res.json({
        msg:"Course Created Successfully",
        courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;