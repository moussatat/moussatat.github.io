/*!
 * custom scripts for image
 */
 
/*!
 * https://stackoverflow.com/questions/37146565/make-an-image-bigger-on-click-and-go-back-to-small-on-second-clic
 */
 
$(document).ready(function () {
        var small={width: "100%",height: "auto"};
        var large={width: "50%",height: "auto", position : "absolute"};
        var count=1; 
        $("#imgtab").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });
	
	
 