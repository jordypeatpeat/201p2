$(document).ready(function(){


        // SLIDE SHOW/HIDE
        $("#profile").hide(); // This hides said divs on site loading.
        $("#stats").hide();
        $("#upload").hide();


        $("#button_profile").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#profile").slideToggle(200);
            $("#markerSide").hide();

                            

            if ($("#stats").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stats").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
        });

        $("#button_stats").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#stats").slideToggle(200);
            $("#markerSide").hide();


            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
        });



        $("#pbutton_stats").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#profile").hide();
            $("#stats").slideToggle(200);
        });




        $("#button_upload").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#upload").slideToggle(200);
            $("#markerSide").hide();

            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#stats").is(":visible")) {
                $("#stats").slideToggle("slow");
            }
        });


        // HIDE OVERLAY SECTIONS WHEN USING MAP TOOLS
        // $('#navDrawer').click(function() { //This checks when the profile button is pressed, if there's a div to close
            
        //     if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
        //         $("#profile").hide();
        //     }

        //     if ($("#stats").is(":visible")) {
        //         $("#stats").hide();
        //     }

        //     if ($("#upload").is(":visible")) {
        //         $("#upload").hide();
        //     }

        // });


});

// SHOW/HIDE FORM BASED ON RADIO
//https://stackoverflow.com/questions/2777139/how-to-use-jquery-to-show-hide-divs-based-on-radio-button-selection
$(document).on( "change", "input[name=options]", function() {

        $("#showStatic1").slideToggle(500);
        $("#showStatic2").slideToggle(500);

} );

//CHANGE BACKGROUND-MAP IMAGE
$(document).on( "change", "input[name=heat]", function() {

        if(document.getElementById('switch-4').checked) {
            $('.mapLayout').css({ 'background-image' : 'url(images/mapHeat.png)' });
        } else {
            $('.mapLayout').css({ 'background-image' : 'url(images/mapGrey.png)' });
        }

} );
