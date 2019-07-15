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
            var button = $('<button>'+shows[i]+'</button>')
            $('#buttonDiv').append(button)
            // give the button an attribute of search of item at index
            button.addClass('button')
            button.attr('showname',shows[i])
        }
    }

    makeButton();
    //function of on click for search-button

    //captures the text in the text input box

    //pushes that text to the array

    //runs the button making function

    //AJAX call using made buttons on click class button and use the datasearch attribute for the button

    //get the gif rating and append to a new div
    // get the gif information and append to the same div

    //append the new div to the gifDiv 
})