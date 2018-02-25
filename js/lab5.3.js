function getTable(){
  $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  });
}

jsonCallback = function(result) {
  var displayResources = $('#list');
  var output = "<table><thead><tr><th>Name</th><th>Age</th><th>Eye color</th><th>Gender</th><th>Email</th><th>Phone</th><th>Address</th><th>Latitude</th><th>Longitude</th></thead><tbody>";
  for (var i in result) {
    output += "<tr><td>" + result[i].name
            + "</td><td>" + result[i].age
            + "</td><td>" + result[i].eyeColor
            + "</td><td>" + result[i].gender
            + "</td><td>" + result[i].email
            + "</td><td>" + result[i].phone
            + "</td><td>" + result[i].address
            + "</td><td>" + result[i].latitude
            + "</td><td>" + result[i].longitude
            + "</td></tr>";
  }
  output += "</tbody></table>";

  displayResources.html(output);
  $("table").addClass("table");
}
