
        // read values that came from login.html 
        var searchParams = new URLSearchParams(window.location.search);
        var savedEmail = searchParams.get("email");
        var savedUsername = searchParams.get("username");
        var savedPassword = searchParams.get("password");

        var loggedIn = false;

        function addEvent() {

            // if we don't even have username/password from login.html
            if (!savedUsername || !savedPassword) {
                window.alert("Please login first from the login page.");
                window.location.href = "login.html";
                return;
            }

            // if not yet logged in via prompt, ask now
            if (!loggedIn) {
                var u = window.prompt("Enter your username:");
                if (u === null) return; 

                var p = window.prompt("Enter your password:");
                if (p === null) return;

                
                if (u === savedUsername && p === savedPassword) {
                    loggedIn = true;
                    window.alert("Login successful. You can add events now.");
                } else {
                    window.alert("Wrong username or password.");
                    return;
                }
            }

            // ask for event information
            var name = window.prompt("Event name:");
            if (name === null) return;

            var place = window.prompt("Place:");
            if (place === null) return;

            var date = window.prompt("Date:");
            if (date === null) return;

            var more = window.prompt("More details:");
            if (more === null) return;

// create new table
var row = document.createElement("tr");

row.innerHTML =
    "<td>" + name + "</td>" +
    "<td>" + place + "</td>" +
    "<td>" + date + "</td>" +
    "<td>" + more + "</td>";


document.getElementById("eventsBody").appendChild(row);

        }
