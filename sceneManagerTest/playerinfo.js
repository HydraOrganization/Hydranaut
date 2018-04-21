var playerName;


function parseURLParams() {

    var url = document.location.href;
        queryStart = url.indexOf("?user=") + 6,
        queryEnd   = url.indexOf("&world=") ,
        playerName = url.slice(queryStart, queryEnd);
        console.log("[debug]: Current URL =>"+url);

        //check to see if the registration part was bypassed. If so, then just printout a generic Guest message.
        if(url == "http://localhost:3000//sceneManagerTest/index.html" || url == "https://hydranaut.unt.edu/sceneManagerTest/index.html"|| url == "http://hydranaut.unt.edu/sceneManagerTest/index.html" || url == "http://127.0.0.1:3000/sceneManagerTest/"){
          document.getElementById('playername').innerHTML = "Welcome, Guest (Not logged in)";
          return;
        }


        console.log("Welcome, " + playerName);

        //inject the data into the element.
        document.getElementById('playername').innerHTML = "Welcome, " + playerName;
}
