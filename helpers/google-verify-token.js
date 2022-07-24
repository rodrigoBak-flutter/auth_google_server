const {OAuth2Client} = require('google-auth-library');

//Documentacion oficial de Google para validar Token
// https://developers.google.com/identity/sign-in/web/backend-auth#send-the-id-token-to-your-server
const CLIENT_ID = 'Agregar el Client_ID';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async(token) =>{

    try{

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [CLIENT_ID,
                'Agregar el Client_ID'
                
            ],  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
    
    
        console.log(payload);
    
        return{
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email']
        }
    }catch(e){
        return null;
    }

}

module.exports = {
    validarGoogleIdToken
}

  

