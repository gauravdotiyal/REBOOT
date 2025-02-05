// here we will learn about ip validation with zod
const express=require('express');
const zod=require('zod');
const app=express();

// if not works check doc of zod for it 
const schema=zod.array(zod.number());


// {
//     email:string => email
//     pasword: should be 8 letter 
//     country: "IN" "US"
// } 
const schema1=zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.post('/checkup',function (req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    const response=schema.safeParse(kidneys);
    if(!response){
        res.status(400).json({
            msg:"Invalid data"
        })
    }
    else{
        res.send(
            response
        );
    }
    


})

app.listen(3000);