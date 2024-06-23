$(document).ready(function () {
    $('#button1').click(function () {
        $('h1').css("background-color", "yellow");
        alert("pressed button");

    });

    $('#button2').click(function () {
        $('h2').hide();
    });

    $('#button3').click(function(){
        $('#imageContainer').show();
    });

    $('p').click(function () {
        var changeColor = $('p').attr('style');

        $(this).attr('style', "background-color : black; color: red" );
        $(this).attr('class', 'clicked');
        $('.clicked').html('selam ben geldim');

    });

});