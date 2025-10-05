const isloggedIn = false;

function dashboard() {
    // transfers and sets isLoggedIn to true
    if(window.location.href == "/login") {
        isloggedIn = true;
        window.location.href("/dashboard", () => {
            console.log("Usser sent to dashboard sucessfully")
        })
    } else {

        
        console.error("Cant be sent, error");
    }
}