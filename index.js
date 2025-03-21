let qr_link;
let link;
document.querySelector('.gen').addEventListener('click',function(){
    
     qr_link=document.querySelector('.ip');//qr_link.value has the qrlink
    if (qr_link.value===''){
        alert('ErrorCode 404:link not found! Please enter a valid link');
        return;
    }
    link=qr_link.value;
    qr_link.value="";


    document.querySelector(".qr").textContent="";

    new QRCode(document.querySelector(".qr"), {
        text: link,  // link of qr
        width: 250,
        height:250,  
    });
      document.querySelector('h1').textContent="Thank You for using the Website"
})
