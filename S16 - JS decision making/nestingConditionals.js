const password = prompt("Please enter a new password") 

//password mus be +6
// password cannot include space
/*
if (password.length >=6)  {
    if (password.indexOf(" ") === -1) {
    console.log("Valid password")
    } else {
        console.log("Password cannot contain space")
    }
} else {
    console.log("Password too short, must be 6+")
}
*/
//Melhor forma 

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password")
} else {
    console.log("invalid password")
}


