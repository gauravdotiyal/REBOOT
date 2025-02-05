const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

mongoose.connect(
  "your_mongo_url",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});


app.post('/signup', async function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  const name=req.body.name;

  const existingUser=await User.findOne({email:username});

  if(existingUser){
    return res.status(400).send("User already exists");
  }
  await User.create({
    name,
    username,
    password
  })

  res.json({
    "msg":"User created successfully"
  })
});



app.listen(3000);