const express=require("express");
const app=express();
const users = require("./MOCK_DATA.json");
const PORT=8000;
//defining routes
app.get('/users',(req,res)) => {
    return res.json(users);
}
app.listen(PORT,()=>console.log(`Server Started at Port:${PORT}`));