document.getElementById("myButton").addEventListener("click", generateQR);

function generateQR(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var url =  tabs[0].url;
        document.querySelector("#img").src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data="+url;
        document.getElementById("text").value = url;
    });
    document.querySelector("#qr-image").style.display="block";
    // let QRtext = document.querySelector("#text").value;
    // let QRtext = url;
//     if(url.length() === 0){
//         document.querySelector("#qr-image .error").innerHTML="Please enter text";
//         document.querySelector("#img").style.display="none";
// }
    
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
        
    
}
                                                                                    