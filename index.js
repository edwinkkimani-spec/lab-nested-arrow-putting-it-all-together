//Add a secure login feature that:

//Allows users to attempt login up to three times.
//Locks the account after three failed attempts.*/


const userInfo={
  username:"username",
  password:"12345",
}
 function createLoginTracker(userInfo){
  let  attemptCount=0; 

   const incrementattempt=()=>{
     attemptCount++;
    };
    const login =(passwordAttempt)=>{
    if(passwordAttempt===userInfo.password){
            return "Login successful"
     }
     incrementattempt();

     if(attemptCount> 3) {
      return "Account locked due to too many failed login attempts"
    }
    
      return `Attempt ${attemptCount}: Login failed`
    };
    
    return login;
  }
  

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};