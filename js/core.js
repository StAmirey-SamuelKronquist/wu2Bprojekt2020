x = 0;
height = $(window).height(); // New height
width = $(window).width(); // New width
let things = Math.sqrt(4 * width * width + 10.8 * height * width + 7.29 * height * height + height);
let allWidth = width * 2 + height + 2 * 0.707 * height;
let leftValue = ((things - allWidth) / 2);
console.log(leftValue)
$(".circle").css({
    "width": things + "px",
    "margin-left": -leftValue + "px",
    "height": things + "px"
});
$(".firstSection").css({
    "width": allWidth + "px",
    "left": leftValue + "px"
})

closedItem = false;
document.addEventListener("wheel", function (e) {
    console.log(closedItem)
    if(!closedItem) {
        if (e.deltaY < 0) {
            x -= 1;
            if(Math.ceil(x / 180) != Math.round(x / 180)) {
                console.log((Math.round(x / 180) * 180));
                console.log(x);
                x = Math.round(x / 180) * 180;
                $(".circle").css("transform", "rotate(" + x + "deg)");
                closedItem = true;
                setTimeout(function(){closedItem = false}, 800);
            }
        } else {
            x += 1;
            if(Math.floor(x / 180) != Math.round(x / 180)) {
                x = Math.round(x / 180) * 180;
                $(".circle").css("transform", "rotate(" + x + "deg)");
                closedItem = true;
                setTimeout(function(){closedItem = false}, 800);
            }
        }
        if(!closedItem) {
            $(".circle").css("transform", "rotate(" + x + "deg)");
        }
        
    }
    
});