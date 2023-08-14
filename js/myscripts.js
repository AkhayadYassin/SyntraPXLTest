
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    // Check the origin to ensure it's from your subdomain
    if (event.origin !== "https://yellow-moss-00f964103.3.azurestaticapps.net") {
        return;
    }

    // Handle the message content
    var data = event.data;
    console.log(data);
}