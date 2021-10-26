console.log("signup working")


const  createUserPlease = async () => {
console.log(" clicked on new user")
const username = document.querySelector('#username2').value
const email = document.querySelector('#email2').value
const password = document.querySelector('#password2').value
console.log(email,"email",password,"password",username,"username")
const data = { 
    username: username,
    email: email,
    password: password
    };
   
if (username , email , password ){
    
    console.log(data)
    const response = async(data) =>{
        // this is coming from the home-routes.js file and should eventually come from the user-routes.js file ie api/create-user
        fetch('/create-user',{
            method: 'POST',
            body: JSON.stringify({username,email,password}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (
            document.location.replace('/')
        )


    }
    response(data)

}

}



var bigElement = document.getElementById("createNewUser")
console.log(bigElement)
bigElement.addEventListener("click", createUserPlease);
// var newUserElement = document.getElementsByClassName("createNewUser")
// console.log(newUserElement)