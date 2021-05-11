const logoutPlease = async(event) => {
    console.log("we are logging out")
    event.preventDefault()
    fetch('/logout',{
        method: 'POST',
    })
    .then (() => {
        console.log("you are logged out!")
        document.location.replace('/')
    })
    .catch( (err)=> {
        console.log("something went wrong error")
    })

    }
 const logoutbtn = document.getElementById("logoutbtn")
if (!!logoutbtn){logoutbtn.addEventListener("click", logoutPlease);}
