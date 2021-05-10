console.log("post button is working")


const  submitPostPlease = async () => {
const title = document.querySelector('#input_text').value
const text = document.querySelector('#textarea2').value
const username = "default"  //document.querySelector('#password').value
const data = { 
    username: username,
    post_title: title,
    post_text: text
    };
if (username , title , text ){
    
    console.log(data)
    const response = async(data) =>{
        fetch('/submit/post',{
            method: 'POST',
            body: JSON.stringify({username,title,text}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (
            document.location.replace('/')
        )


    }
    response(data)

}

}

document.getElementById("submitPostBtn").addEventListener("click", submitPostPlease);