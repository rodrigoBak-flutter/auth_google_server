const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');


const googleAuth = async (req, res = response) => {

    const token = req.body.token;
    if(!token){
        return res.json({
            ok:false,
            msg:'No hay token en la peticion',
            
        });
    }
    const googleUser = await validarGoogleIdToken(token);

    if (!googleUser){
        return res.status(400).json({
            ok:false
        });
    }

    //Si pasa ya se puede guardar en BBDD

    res.json({
        ok:true,
        msg:'Ya estas logeado',
        googleUser
        //token
    });
}

module.exports = {googleAuth}