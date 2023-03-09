const express = require("express");
const app = express();




app.get('/api/:agentid/:id', async(req,res)=>
{
    const agent =req.params
    console.log(agent)
    res.send(agent)
})


app.listen(3001, () => {
    console.log(`server is runnig at port no 3001`);
  });