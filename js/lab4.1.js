var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    drawCanvas = document.getElementById("draw-canvas"),
    drawCtx = drawCanvas.getContext("2d"),
    painting = false,
    lastX = 0,
    lastY = 0,
    curX = 0,
    curY = 0,
    startX = 0,
    startY = 0,
    lineThickness = 1;

canvas.width = canvas.height = 600;

drawCanvas.width = drawCanvas.height = 600;

drawCanvas.onmousedown = function(e) {
    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;
    painting = true;

};

drawCanvas.onmouseup = function(e){
    painting = false;

    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(lastX, lastY);
    ctx.stroke();

    drawCtx.clearRect(0, 0, 600, 600);
}

drawCanvas.onmouseclick = function(e) {

    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;

    painting = true;
};


drawCanvas.onmousemove = function(e) {
    if(painting){
        lastX = e.pageX - this.offsetLeft;
        lastY = e.pageY - this.offsetTop;
        drawCtx.clearRect(0,0,600,600);
        drawCtx.beginPath();
        drawCtx.moveTo(startX ,startY );
        drawCtx.lineTo(lastX, lastY);
        drawCtx.stroke();
    }
}
