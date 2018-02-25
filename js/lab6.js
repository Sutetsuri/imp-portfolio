function getPictures() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickerAPI, {
      tags: $("#text-input").val(),
      tagmode: "any",
      format: "json"
  })
    .done(function(data) {
      $("#image-list").empty();
      $.each(data.items, function(counter, item) {
        $("<img>").attr({ "src": item.media.m, "class": "image" }).appendTo("#image-list");
        if (counter === 14) {
          return false;
        }
      });
    });
}
