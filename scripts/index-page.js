let apiURL = "https://project-1-api.herokuapp.com/comments?api_key=eab666ab-99ed-4abb-b312-c18b41a823ba";

function createComments(commentList) {
    commentList.forEach(comment => displayComment(comment));
}

function displayComment(comment) {
    const postedCommentsContainer = document.querySelector("#posted");

    const oneComment = document.createElement("div");  
    postedCommentsContainer.appendChild(oneComment);
    oneComment.classList.add("comments__postedComment");

    const commentLeft = document.createElement("div");
    commentLeft.classList.add("comments__postedComment-left");
    oneComment.appendChild(commentLeft);

    if (comment.avatarSrc) {        
        const commentAvatar = document.createElement("img");
        commentAvatar.classList.add("comments__image-me");
        commentLeft.appendChild(commentAvatar);
        commentAvatar.src=comment.avatarSrc;
    } else { 
        const commentGreyAvatar = document.createElement("div");
        commentGreyAvatar.classList.add("comments__postedComment-image");
        commentLeft.appendChild(commentGreyAvatar);
    }

    const commentRight = document.createElement("div");
    commentRight.classList.add("comments__postedComment-right");
    oneComment.appendChild(commentRight);

    const commentTop = document.createElement("div");
    commentTop.classList.add("comments__postedComment-top");
    commentRight.appendChild(commentTop);
           
    const commentName = document.createElement("div");
    commentName.classList.add("comments__postedComment-name");
    commentTop.appendChild(commentName);
    commentName.innerText = comment.name;

    let useDate = new Date(comment.timestamp);
    let useDate2 = useDate.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
      
    const commentDate = document.createElement("div");
    commentDate.classList.add("comments__postedComment-date");
    commentTop.appendChild(commentDate);
    commentDate.innerText = useDate2;
    
    const commentMain = document.createElement("div");
    commentMain.classList.add("comments__postedComment-main");
    commentRight.appendChild(commentMain);
    commentMain.innerText = comment.comment;
}

function getNewCommentObject(event) {
    const formElement = event.target;
    const commentName = formElement.name.value;
    const commentContent = formElement.commentContent.value;    
    return {
        name: commentName,        
        comment: commentContent,        
    };
}

function getCommentsToDisplay() {
    axios.get(apiURL)
    .then(response => {
        let allComments = response.data;
        allComments.sort(function(a, b) { 
            return b.timestamp - a.timestamp;
        }); 
        console.log(allComments);
        createComments(allComments);
    })
    .catch((error) => console.log("ERROR RETRIEVING DATA"));
}

getCommentsToDisplay();

const commentForm = document.querySelector("#comment");
commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newComment = getNewCommentObject(event);    
    axios
        .post(apiURL, newComment)
        .then(()=> {            
            const postedCommentsContainer = document.querySelector("#posted");
            postedCommentsContainer.innerHTML = null;
            getCommentsToDisplay();
            commentForm.reset();
        })   
});





