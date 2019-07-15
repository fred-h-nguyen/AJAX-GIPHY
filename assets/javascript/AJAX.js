$(document).ready(function () {

    // make an array of tv shows

    var shows = ['Dr. Who', 'Stranger Things', 'Sherlock', 'The Flash', 'Arrow', 'Friends', 'Archer', "That 70's Show"]

    //function to make buttons
    function makeButton() {

        //empty the buttonDiv
        $('#buttonDiv').empty();
        // loop through the array
        for (var i = 0; i < shows.length; i++) {
            //add a button to the buttonDiv of array at index
            var button = $('<button>' + shows[i] + '</button>')
            $('#buttonDiv').append(button)
            // give the button an attribute of search of item at index
            button.addClass('show')
            button.attr('showname', shows[i])
        }
    }

    makeButton();
    //function of on click for search-button
    $('.search-button').click(function (event) {
        event.preventDefault();
        //captures the text in the text input box
        var addedShow = $('#show').val().trim();
        //pushes that text to the array
        shows.push(addedShow);
        //runs the button making function
        makeButton();
    })

    $(document).on('click', '.show', gifGet)

    function gifGet() {
        var getShow = $(this).attr('showname')
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?api_key=4EtyCi9f6VQBTqPOmyHaKwV3iYLWUFvl&q='+getShow+'&limit=10&lang=en',
            method: 'GET'
        }).then(function (show) {
            for (var i=0; i<show.data.length; i++){
                console.log(show.data[i])
                var newDiv = $('<div>')
                var rating = $('<h2>')
                var gif = $('<img>')
//
                rating.text(show.data[i].rating);
                rating.appendTo(newDiv);
//
                gif.attr('src',show.data[i].images.original.url);
                gif.addClass('gif');
                gif.appendTo(newDiv);
//
                $('#gifDiv').prepend(newDiv);

            }
            
        })
    }

    //AJAX call using made buttons on click class button and use the datasearch attribute for the button

    //get the gif rating and append to a new div
    // get the gif information and append to the same div

    //append the new div to the gifDiv 
})