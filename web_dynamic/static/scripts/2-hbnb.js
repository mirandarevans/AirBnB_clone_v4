let amenities = {}

$(document).ready(function () {
  $('div.amenities input[type=checkbox]').click(function () {
    let amenity = $(this)[0]
    console.log($('this'));
    console.log(amenity);
    if (amenity['checked'] == true) {
      amenities[amenity.attributes[0].nodeValue] = amenity.attributes[1].nodeValue;
      console.log(amenity.attributes[0]);
      console.log(amenity.attributes[1]);
      console.log(Object.values(amenities));
    } else {
      delete amenities[amenity.attributes[0].nodeValue];
    }
    $('div.amenities h4').text(Object.values(amenities).sort().toString() + '\xa0');
    console.log(amenities);
    console.log($('div.amenities h4').text());
  });

  // should be changed to a url in production
  let status = $.getJSON('http://0.0.0.0:5000/api/v1/status/', function (data) {
    console.log(data);
  });
});
