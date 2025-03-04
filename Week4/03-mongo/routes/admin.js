const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();

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

router.post('/courses', adminMiddleware, async (req, res) => {
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

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses= await Course.find({});
    res.json({
        courses:allCourses
    })
      
});

module.exports = router;