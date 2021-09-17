console.log("login Script is 'working' ")
const loginPlease = async () => {
const email = document.querySelector('#username').value
const password = document.querySelector('#password').value
const data = { 
    email: email,
    password: password
    };
    console.log(data,"this is data")
if (email , password ){
    
    console.log(data)
    const response = async(data) =>{
        fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (()=> {
            console.log("done")
            document.location.replace('/')
        })


    }
    response(data)

}

}
const unhide=()=>{
    var element = document.getElementById("login")
    var signup = document.getElementById("signup")
   element.classList.add("hide")
   signup.classList.remove("hide")

}


document.getElementById("loginSubmitBtn").addEventListener("click", loginPlease);
document.getElementById("signUpButton").addEventListener("click", unhide);

// var newUserElement = document.getElementsByClassName("createNewUser")
// console.log(newUserElement)

