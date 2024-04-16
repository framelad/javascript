let axios = require("axios")
axios.get("https://catfact.ninja/fact")
    .then(function(res){
        console.log(res.data.fact)
    })