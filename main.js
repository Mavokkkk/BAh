var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var eventoMouse = "";
var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;



var txtTraco = document.getElementById("traco");
var txtCor = document.getElementById("cor");

var cor = "red";
var traco = 2;


canvas.addEventListener("mousedown", mouseEvent);
canvas.addEventListener("mouseup",mouseEvent);
canvas.addEventListener("mouseleave", mouseEvent);




function mouseEvent (e) {
    eventoMouse = e.type;
   


}

canvas.addEventListener("mousemove", mousemove);


function mousemove (e) {
     posicaoX = e.offsetX;
    posicaoY = e.offesetY;

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = traco;
    
        ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
        ctx.lineTo(posicaoX, posicaoY);
        ctx.stroke();
        
    }
        ultimaPosicaoX = posicaoX;
        ultimaPosicaoY = posicaoY;
}


txtCor.addEventListener("input", function (){
    cor = txtCor.value;
});


txtTraco.addEventListener("input", function (){
    if (txtTraco.value > 0) {
        traco = txtTraco.value;
    }
});








