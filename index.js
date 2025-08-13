const expree=require("express");
const app=expree();

const port=8080;

app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice", (req,res)=>{
    let diceval= Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs", {diceval});
});

app.listen(port,()=>
{
    console.log(`Listning to port${port}`);
}
);