$(document).ready(function () {
    /*$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".stationname *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });*/

    var $search = $("#search").on('input', function () {
        /*$btns.removeClass('active');*/
        var matcher = new RegExp($(this).val(), 'gi');
        $('.stationbox').show().not(function () {
            return matcher.test($(this).find('.stationname' ).text())
        }).hide();
    })
    
    var allstations = $(".stationbox");
    
    var station = $("h1.stationname").text();
    
    var location = 
    $("div.stationlocation").text();
   
    var distance =  $("div.distancecontainer").text();
    
    var price = $("span.pricecontainer").text();
    
    var dbref = firebase.database().ref().child("Stations");
    
    dbref.on('value', snap => console.log(snap.val()));
    
    
});

