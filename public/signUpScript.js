console.log("itsworking")


const  createUserPlease = async () => {
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
            console.log("done")
        )


    }
    response(data)

}

}

document.getElementById("createNewUser").addEventListener("click", createUserPlease);