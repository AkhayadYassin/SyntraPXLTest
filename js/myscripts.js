
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    // // Check the origin to ensure it's from your subdomain
    // if (event.origin !== "https://yellow-moss-00f964103.3.azurestaticapps.net") {
    //     return;
    // }
    if(event){
        let iframes = document.querySelectorAll('iframe');
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }
    // Handle the message content
    let data = event.data;
    console.log({event});
    console.log({data});
}