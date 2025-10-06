let isloggedIn = false;

document.addEventListener('DOMContentLoaded', function() {
    const pw = document.querySelector('.pw'); 
    const user = document.querySelector('.user');

    if (!pw || !user) {
        return;
    }

    function dashboard() {
        if(window.location.pathname == "/login/") { 
            isloggedIn = true;
            window.location.href = "../dashboard/index.html"; 
        } else {
            console.error("Cant be sent");
        }
    }

    function main() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (pw.value.trim() === "" || user.value.trim() === "") {
                    alert("Please enter both a username and password.");
                } else {
                    dashboard();
                }
            }
        });
    }

    main();
});