const express=require("express");
const app=express();
const users = require("./MOCK_DATA.json");
const PORT=8000;
//defining routes
app.get('/users',(req,res)=>{
const html =`
<ul>
${users.map((user) => `<li>${user.first_name}</li>`).join("")}
</ul>
`;
res.send(html);
});


app.get('/api/users',(req,res) => {
    return res.json(users);
});

app.get("/api/users/:id",(req,res) =>{

});
app.listen(PORT,()=>console.log(`Server Started at Port:${PORT}`));