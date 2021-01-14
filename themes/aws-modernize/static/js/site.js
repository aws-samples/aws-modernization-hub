$(document).ready(function () {
    // Js for the accordion on the left side of the Explore page
    $(".card-header").on("click", function () {
        var $this = $(this);
        var $elem = $this.find("i.fa");
        if ($this.hasClass("collapsed")) {
            $elem.removeClass("fa-angle-down").addClass("fa-angle-up");
        }
        else {
            $elem.removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });

   // Js for the modules menu on the Module Detail Page
   // Open/Close the container of the menu items.
	$(".dropdown-item").on("click", function () {
        var $this = $(this);
        $(".dropdown-item").removeClass("active");
        $this.addClass("active");
        $this.parents(".dropdown").find('.menuItem').html($this.text()).val($this.data('value'));
        $("#customDropdown").hide();
    });  
    
    // closing the opened menu when you click anywhere in the window
    $(document).mouseup(function (e) {
        var dropdown = $("#customDropdown");
        // if the target of the click isn't the container nor a descendant of the container
        if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
            dropdown.hide();
        }
    });
    //Open the dropdown on the click of the name of the selected module
    $(".menuItem").on("click", function (e) {
        e.stopPropagation();
        $("#customDropdown").toggle();
        // If the height of the scrollable div is greater than the container then the javascript below should work 
        if ($('.content').height() > $('.menu-holder').height()) {
            toggleScroll();
            $("#down").hover(function () {
                animateContent("down");
                toggleScroll();
            }, function () {
                $('.content').stop();
                toggleScroll();
            });
    
            $("#up").hover(function () {
                animateContent("up");
                toggleScroll();
            }, function () {
                $('.content').stop();
                toggleScroll();
            });
        } else {
            $(".menu-holder").css("height", "auto");
            $(".content").css("margin-bottom", "0");
            $("#down .fas").hide();
            $("#up .fas").hide();
        }
    });
});
    
//Function that calculates the margin based on the heights and causes the lidt of items to scroll
function animateContent(direction) {
    var animationOffset = $('.menu-holder').height() - $('.content').height();
    if (direction === 'up') { animationOffset = 0;}
    //Calculating the animation time based on the height of the scrollable div
   // animationRate : pixels per second


   
    var animationRate = 200, 
        contentHeight = $(".content").height(),
        animationTime = contentHeight / animationRate * 1000;

    $('.content').animate({ "marginTop": animationOffset + "px" }, {duration: animationTime, easing: "linear"});
}

 $(document).ready(function() {
    
    $('a[href="' + location.pathname + '"]').closest('a').addClass('active'); 
  });
//Function used for checking the offset values and hiding the top/down arrow when not needed 
function toggleScroll() {
    var maxOffset = Math.abs(parseInt($('.menu-holder').height() - $('.content').height())),
        currOffset = Math.abs(parseInt($(".content").css("margin-top")));
        
    if (currOffset === 0) {
        $("#up .fas").hide();
        $("#down .fas").show();
    } 
    else if (currOffset === maxOffset) {
        $("#up .fas").show();
        $("#down .fas").hide();
    }
    else if (currOffset > 0 && currOffset < maxOffset) {
        $("#up .fas").show();
        $("#down .fas").show();
    }
    else {
        $("#up .fas").hide();
        $("#down .fas").hide();
    }
}


