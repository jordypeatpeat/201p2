$(document).ready(function(){


        // SLIDE SHOW/HIDE
        $("#profile").hide(); // This hides said divs on site loading.
        $("#stats").hide();
        $("#upload").hide();


        $("#button_profile").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#profile").slideToggle(200);



                            

            if ($("#stats").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stats").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
        });

        $("#button_stats").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#stats").slideToggle(200);



            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
        });

        $("#button_upload").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#upload").slideToggle(200);

            

            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#stats").is(":visible")) {
                $("#stats").slideToggle("slow");
            }
        });



        var $heatmap = false;

        //don't mind me...
        $("#switch-4").click(function() { //When Heatmap button pressed, switch on/off depending on $heatmap
            if ($heatmap == false){
                $('.demo-layout-transparent').css({ 'background-image' : 'url(images/mapHeat.png)' });
                $heatmap = true;
            }
            else {
                $('.demo-layout-transparent').css({ 'background-image' : 'url(images/mapGrey.png)' });
                $heatmap = false;
            }
        });
});