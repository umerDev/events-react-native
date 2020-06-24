//Deals with authentication 

export const VerifyEmailPassword = (Email,Pass) =>
{
    if(!Email || !Pass)
        return false;
    
    const valid = validateEmail(Email);
    if(valid)
        //do google auth / aws cognito
        return true;

}

function validateEmail(email) 
{
    var emailExp = /\S+@\S+\.\S+/;
    return emailExp.test(email);
}