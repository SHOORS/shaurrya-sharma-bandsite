const showsList = document.getElementById("shows");
showsList.classList.add("shows__showsList");

const showsleft = document.createElement("div");
showsleft.classList.add("shows__left");
showsList.appendChild(showsleft);

const showsright = document.createElement("div");
showsright.classList.add("shows__right");
showsList.appendChild(showsright);

const title = document.createElement("h2");
title.innerText = "Shows";
title.classList.add("shows__title");
showsleft.appendChild(title);

const tabletop = document.createElement("div");
tabletop.classList.add("shows__tabletop");
showsright.appendChild(tabletop);

const tabletopdate = document.createElement("div");
tabletopdate.classList.add("shows__tabletop-item");
tabletopdate.innerText = "DATE"
tabletop.appendChild(tabletopdate);

const tabletopvenue = document.createElement("div");
tabletopvenue.classList.add("shows__tabletop-item");
tabletopvenue.innerText = "VENUE"
tabletop.appendChild(tabletopvenue);

const tabletoplocation = document.createElement("div");
tabletoplocation.classList.add("shows__tabletop-item");
tabletoplocation.innerText = "LOCATION"
tabletop.appendChild(tabletoplocation);

const tabletopempty = document.createElement("div");
tabletopempty.classList.add("shows__tabletop-item");
tabletopempty.innerText = ""
tabletop.appendChild(tabletopempty);

function createEachShow(shows) {

for (let i = 0; i < shows.length; i++) {

    const oneShow = document.createElement("div");
    oneShow.classList.add("shows__oneShow");
    showsright.appendChild(oneShow);

    const showDate = document.createElement("div");
    showDate.classList.add("shows__date");

    let formattedDate = (shows[i].date);
    const formattedDate2 = new Date(formattedDate).toDateString();
    showDate.innerText = formattedDate2;    
    oneShow.appendChild(showDate);

    const showVenue = document.createElement("div");
    showVenue.classList.add("shows__venue");
    showVenue.innerText = shows[i].place;
    oneShow.appendChild(showVenue);

    const showLocation = document.createElement("div");
    showLocation.classList.add("shows__location");
    showLocation.innerText = shows[i].location;
    oneShow.appendChild(showLocation);

    const showButton = document.createElement("button");
    showButton.classList.add("shows__button");
    showButton.innerText = "BUY TICKETS";
    oneShow.appendChild(showButton);

    oneShow.addEventListener("click", onClick);
}};

function getShowsToDisplay() {
    const showsURL = "https://project-1-api.herokuapp.com/showdates?api_key=eab666ab-99ed-4abb-b312-c18b41a823ba";
    axios.get(showsURL)    
    .then(response => {
        console.log(response);
        let allShows = response.data; 
        createEachShow(allShows);
    })
    .catch((error) => console.log("ERROR RETRIEVING DATA"));
}

getShowsToDisplay();

function onClick(event) {
    const currentSelected = document.querySelector(".shows__oneShow--selected");
    if (currentSelected) {
        currentSelected.classList.replace("shows__oneShow--selected", "shows__oneShow");
    }
    event.currentTarget.classList.replace("shows__oneShow", "shows__oneShow--selected");
}
