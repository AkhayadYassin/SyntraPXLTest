function handleAuthentication(){
    const urlFragment = window.location.hash;
    console.log({urlFragment});
    if (urlFragment.includes("id_token")) {
        // Authentication was successful. Extract and handle the ID token.
        console.log("token found");
        window.postMessage(urlFragment, "*")
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

    let iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].parentNode.removeChild(iframes[i]);
    }
    window.top.location.reload();
}
window.addEventListener("message", receiveMessage, false);
window.addEventListener("load", (event) => {
    handleAuthentication();
});