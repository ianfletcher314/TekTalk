console.log("itsworking")


const  loginPlease = async () => {
const username = document.querySelector('#username').value
const password = document.querySelector('#password').value
const data = { 
    username: username,
    password: password
    };
if (username , email , password ){
    
    console.log(data)
    // const response = async(data) =>{
    //     fetch('/create-user',{
    //         method: 'POST',
    //         body: JSON.stringify({username,password}),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then (
    //         console.log("done")
    //     )


    // }
    // response(data)

}

}

document.getElementById("loginSubmitBtn").addEventListener("click", loginPlease);