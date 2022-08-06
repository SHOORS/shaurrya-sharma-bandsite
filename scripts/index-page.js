const allComments = [
    {
    name:"Connor Walton",
    date:"02/17/2021",
    wording:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
    name:"Emilie Beach",
    date:"01/09/2021",
    wording:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
    name:"Miles Acosta",
    date:"12/20/2020",
    wording:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

function createComments(commentList) {
    commentList.forEach(comment => displayComment(comment));
}

// goal: create comment element and add it to top of div#posted
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

    const commentDate = document.createElement("div");
    commentDate.classList.add("comments__postedComment-date");
    commentTop.appendChild(commentDate);
    commentDate.innerText = comment.date;

    const commentMain = document.createElement("div");
    commentMain.classList.add("comments__postedComment-main");
    commentRight.appendChild(commentMain);
    commentMain.innerText = comment.wording;
}

createComments(allComments);


function getNewCommentObject(event) {
    const formElement = event.target;
    const commentName = formElement.name.value;
    const commentContent = formElement.commentContent.value;
    const commentPictureSrc = event.target.commentPicture.src;
    const today = new Date(Date.now());
    const date = today.getDay() + '/' + today.getMonth() + '/'
        + today.getFullYear();

    return {
        name: commentName,
        date,
        wording: commentContent,
        avatarSrc: commentPictureSrc
    };
}

const commentForm = document.querySelector("#comment");
commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newComment = getNewCommentObject(event);
    allComments.unshift(newComment);

    const postedCommentsContainer = document.querySelector("#posted");
    postedCommentsContainer.innerHTML = null;
    createComments(allComments);
    commentForm.reset();
})





