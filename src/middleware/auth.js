const jwt = require("jsonwebtoken")

function authentication (req,res,next)
{
    console
    .log("sarve")

    const token = req
    .headers['authorization']

    console.log(token)
    if(!token)
    {
        res.status(400)
        .send({msg: "Token não informado"})
    }

    jwt
    .verify(token, "secret",(err, decoded) => {
        if(err)
        {
            return res.status(400)
            .send({msg: "Token não informado"})
        }
        
         console
        .log(decoded)

        next()

    })
}

module.exports = authentication;