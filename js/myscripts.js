function handleAuthentication(){
    const urlFragment = window.location.hash;
    console.log({urlFragment});
    if (urlFragment.includes("id_token")) {
        // Authentication was successful. Extract and handle the ID token.
        console.log("token found");
        window.postMessage(urlFragment, "*")
        localStorage.setItem("token", urlFragment);
    }
}
function receiveMessage(event) {
    // Check the origin to ensure it's from your subdomain
    // if (event.origin !== "https://sub.example.com") {
    //     return;
    // }
    console.log(event.origin);

    // Handle the message content
    var data = event.data;
    console.log(data);
    window.top.location.reload();
}
window.addEventListener("message", receiveMessage, false);
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('userInfoForm').classList.add('hidden');


    handleAuthentication();

    if(localStorage.getItem("token").includes("id_token")){
        document.getElementById('loginPanel').classList.add('hidden');

        document.getElementById('userInfoForm').classList.remove('hidden');
    }
});