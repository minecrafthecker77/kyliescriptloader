import isloggedIn from "./login/index.js"
const loginButton = document.querySelector("loginClick")
document.addEventListener("DOMContentLoaded", () => {
    if(isloggedIn = true) {
        loginButton.innerHTML == <p>Click Here to go to the dashboard.</p>
    } else {
        if(ifLoggedIn = false) {
            console.log("If you see this, you need to login ")
        }
    }
})