var playerName;


function parseURLParams() {

    var url = document.location.href;
        queryStart = url.indexOf("?user=") + 6,
        queryEnd   = url.indexOf("&world=") ,
        playerName = url.slice(queryStart, queryEnd),
        console.log("Welcome, " + playerName);

        //inject the data into the element.
        document.getElementById('playername').innerHTML = "Welcome, " + playerName;
}
