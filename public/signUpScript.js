console.log("signup working")


const  createUserPlease = async () => {
console.log(" clicked on new user")
const username = document.querySelector('#username').value
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value
const data = { 
    username: username,
    email: email,
    password: password
    };
if (username , email , password ){
    
    console.log(data)
    const response = async(data) =>{
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