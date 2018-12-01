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
});
