console.log("comment button is working")


const  submitCommentPlease = async () => {
const post_id = 2
const text = document.querySelector('#commentText').value
// const user_id = 5  //document.querySelector('#password').value
const data = { 
    // user_id: user_id,
    post_id: post_id,
    comment_text: text
    };
if (  post_id , text ){
    
    console.log(data)
    const response = async(data) =>{
        fetch('/submit/comment',{
            method: 'POST',
            body: JSON.stringify({post_id,text}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (
            // document.location.replace('/')
        )


    }
    response(data)

}

}

document.getElementById("newCmtSubmitBtn").addEventListener("click", submitCommentPlease);