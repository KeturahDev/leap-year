//business logic
var leapYear = function() {
    return false;
}

//user interface
$(document).ready(function() {
    $('#leap-year').submit(function(event) {
        event.preventDefault();

        var year = parseInt($('input#year').val());

        var result = leapYear(year);
        $('#result').text(result);
    })
})