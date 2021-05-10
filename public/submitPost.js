console.log("post button is working")


const  submitPostPlease = async () => {
const title = document.querySelector('#input_text').value
const text = document.querySelector('#textarea2').value
const user_id = 5  //document.querySelector('#password').value
const data = { 
    user_id: user_id,
    post_title: title,
    post_text: text
    };
if (user_id , title , text ){
    
    console.log(data)
    const response = async(data) =>{
        fetch('/submit/post',{
            method: 'POST',
            body: JSON.stringify({user_id,title,text}),
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
