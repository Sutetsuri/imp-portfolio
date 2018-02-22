var socket = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

function callWebSocket() {

    socket.onopen = function () {
        console.log("Hello, Connected To WS server");
    };

    socket.onmessage = function (e) {
        $("#messageList").append(e.data + "<br>");
    };
    socket.onerror = function (e) {
        alert("An error occured while connecting... " + e.data);
    };
    socket.onclose = function () {
        alert("hello.. The coonection has been clsoed");
    };

}

function onEnter(event){
  if (event.keyCode == 13){
    sendMessage();
  }
}

function sendMessage(message){
    var message = document.getElementById("myMessage");
    socket.send(message.value);
    updateScroll();
    message.value = "";

}

function sendLOGO(){
    socket.send("LOGO");
    updateScroll();

}

function updateScroll() {
  var h = $("#messageList").get(0).scrollHeight;
  $("#messageList").animate({scrollTop:h});
}

window.setTimeout(function() {
 updateScroll();  }, 1500);
