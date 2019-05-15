// This is a JavaScript file

function scanBarcode() {
     window.plugins.barcodeScanner.scan( function(result) {
          if(result.text == "280720550" ){
               window.location.replace("codigo1.html");
          }
          else if(result.text == "989895555"){
               window.location.replace("codigo2.html");
          }
          else if(result.text == "85236987"){
               window.location.replace("codigo3.html");
          }
          else if(result.text == "85369877444"){
               window.location.replace("codigo4.html");
          }
          else{
               alert("código de barra inválido: " + error);
          }
    });
}