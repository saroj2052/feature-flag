const express = require("express");
const cors = require("cors");
const featureFlagConfig = require('./featureFlagConfig')

const app = express();

app.use(cors());

const PORT = 3001;
app.get('/feature/:env/:project', (req, res)=>{
    const {env, project} = req.params
    const flags = featureFlagConfig[env] && featureFlagConfig[env][project]
    if (flags){
        res.json(flags)
    }
    else {
        res.status(400).send('Not Found')
    }

})
app.listen( PORT, ()=>{
    console.log("server is up and running.")
});