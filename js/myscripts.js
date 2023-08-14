function handleAuthentication(){
    const urlFragment = window.location.hash;
    console.log({urlFragment});
    if (urlFragment.includes("id_token")) {
        // Authentication was successful. Extract and handle the ID token.
        console.log("token found");

        let iframes = document.querySelectorAll('iframe');
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }
}

window.addEventListener("load", (event) => {
    handleAuthentication();
});