const mysql=require('mysql2');
const express=require('express');
const app=express();

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"intern",
    multipleStatements:true,
});

con.connect((err)=>{

    if(!err)
    console.log("conncted");
    else
    console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});app.listen( 4000, () => console.log('connected to server'));

app.get('/intern',(req,res)=>
{
    con.query("select *  from interns",
    (err,rows,fields)=>
    {
        if (!err) res.send(rows);
        else console.log(err);
    }
    );
})