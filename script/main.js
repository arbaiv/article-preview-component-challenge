var shareSec = document.getElementById("share-sec-active");
var shareButton = document.getElementById("share-button");
var activeShareButton = document.getElementById("share-button-active");
shareButton.addEventListener("click", activateShareLink);
shareButton.addEventListener("enter", function(e){
    if(e.keycode === 13){
        activateShareLink();
    }
});
activeShareButton.addEventListener("click", deactivateShareLink);
activeShareButton.addEventListener("enter", function(e){
    if(e.keycode === 13){
        deactivateShareLink();
    }
});
function activateShareLink() {
    if(shareSec.className === "share-sec-inactive-animate"){
        shareSec.className = "share-sec-active-animate";
    } else {
        shareSec.className = "share-sec-inactive-animate";
    }
}
function deactivateShareLink() {
    if(shareSec.className === "share-sec-active-animate"){
        shareSec.className = "share-sec-inactive-animate";
    }
}
// Share links prevent default
var shareLinks = document.querySelectorAll("#share-links a");
for(var i = 0; i < shareLinks.length; i++){
    shareLinks[i].addEventListener("click", function(e){
        e.preventDefault();
    });
    shareLinks[i].addEventListener("enter", function(e){
        if(e.keycode === 13){
            e.preventDefault();
        }
    });
}
// Share texts copies the URL to the clipboard
var shareText = document.getElementById("share-text");
shareText.addEventListener("click", function(e){
    e.preventDefault();
    copyURL();
});
shareText.addEventListener("enter", function(e){
    e.preventDefault();
    if(e.keycode === 13){
        copyURL();
    }
});
function copyURL(){
    navigator.clipboard.writeText(window.location.href);
}