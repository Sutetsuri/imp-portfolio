function addPerson() {
  var node = document.createElement("li");
  var nameInput = document.getElementById('name-input');
  var textNode = document.createTextNode(nameInput.value);
  node.appendChild(textNode);
  document.getElementById('person-list').appendChild(node);
  nameInput.value = "";
}

function keyPress(event) {
  if (event.keyCode == 13) {
    addName();
  }
}
