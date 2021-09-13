console.log("itsworking")


const  loginPlease = async () => {
const username = document.querySelector('#username').value
const password = document.querySelector('#password').value
const data = { 
    username: username,
    password: password
    };
if (username , password ){
    
    console.log(data)
    const response = async(data) =>{
        fetch('/loginSubmit',{
            method: 'POST',
            body: JSON.stringify({username,password}),
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
    console.log("working")
    var element = document.getElementById("login")
    var signup = document.getElementById("signup")
    console.log(element)
   element.classList.add("hide")
   signup.classList.remove("hide")

}


document.getElementById("loginSubmitBtn").addEventListener("click", loginPlease);
document.getElementById("signUpButton").addEventListener("click", unhide);
