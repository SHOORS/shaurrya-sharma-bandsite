const shows = [
    { 
    date: "Mon Sept 06 2021", 
    venue: "Ronald Lane",
    location: "San Francisco, CA"
    },
    {
    date:"Tue Sept 21 2021", 
    venue:"Pier 3 East", 
    location:"San Francisco, CA"
    },
    {
    date: "Fri Oct 15 2021", 
    venue: "View Lounge", 
    location: "San Francisco, CA" 
    },
    {
    date: "Sat Nov 06 2021", 
    venue: "Hyatt Agency", 
    location: "San Francisco, CA"
    },
    {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center", 
    location: "San Francisco, CA" 
    },
    {
    date: "Wed Dec 15 2021", 
    venue: "Press Club", 
    location: "San Francisco, CA"
    }
] 



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


for (let i = 0; i < shows.length; i++) {

    const oneShow = document.createElement("div");
    oneShow.classList.add("shows__oneShow");
    showsright.appendChild(oneShow);

    const showDate = document.createElement("div");
    showDate.classList.add("shows__date");
    showDate.innerText = shows[i].date;
    oneShow.appendChild(showDate);

    const showVenue = document.createElement("div");
    showVenue.classList.add("shows__venue");
    showVenue.innerText = shows[i].venue;
    oneShow.appendChild(showVenue);

    const showLocation = document.createElement("div");
    showLocation.classList.add("shows__location");
    showLocation.innerText = shows[i].location;
    oneShow.appendChild(showLocation);

    const showButton = document.createElement("button");
    showButton.classList.add("shows__button");
    showButton.innerText = "BUY TICKETS";
    oneShow.appendChild(showButton);
}