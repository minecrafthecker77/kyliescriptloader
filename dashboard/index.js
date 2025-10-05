import isLoggedIn from "../login/index.js"

function main() {
    if(isLoggedIn = true) {
        console.log("Sucessful Login")
    } else {
        if(isLoggedIn = false) {
            window.document.href = "../login"
            console.log("An attempt has been made to use Kylie Script Loader without auth. If this persists, you will be blackisted.")
        }
    }
}
main()