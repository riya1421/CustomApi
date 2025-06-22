const express=require("express");
const app=express();
const users = require("./MOCK_DATA.json");
const PORT=8000;
//defining routes
app.get('/api/users',(req,res) => {
    return res.json(users);
});
app.get('/users',(req,res)=>{

});
app.listen(PORT,()=>console.log(`Server Started at Port:${PORT}`));