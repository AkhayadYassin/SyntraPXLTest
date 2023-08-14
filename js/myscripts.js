function handleAuthentication(){
    const urlFragment = window.location.hash;
    if (urlFragment.includes("id_token")) {
        // Authentication was successful. Extract and handle the ID token.
        console.log("token found");
    }
}

handleAuthentication();