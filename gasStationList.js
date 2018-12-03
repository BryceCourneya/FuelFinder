$(document).ready(function () {

    var $search = $("#search2").on('input',function(){
        //$btns.removeClass('active');
        var matcher = new RegExp($(this).val(), 'gi');
        $('.stationbox').show().not(function(){
            return matcher.test($(this).find('.stationname').text())
        }).hide();
    })
    
});