
document.getElementById("myButton").addEventListener("click", generateQR);
document.getElementById("btn-2").addEventListener("click", generateQRByText);

var withText = false;
function generateQR(){

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var url =  tabs[0].url;
        document.querySelector("#img").src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data="+url;
        document.getElementById("text").value = url;
    });
        document.querySelector("#qr-image").style.display="block";
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
    
}

function generateQRByText(){
        withText = true; 
        let QRtext = document.querySelector("#text").value;
        document.querySelector("#img").src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data="+QRtext;
        document.querySelector("#qr-image").style.display="block";
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
}
