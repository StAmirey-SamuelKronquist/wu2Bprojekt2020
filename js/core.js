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
$(".section").css({
    "width": allWidth + "px",
    "left": leftValue + "px"
})


let spinWhenDegree = 45;
closedItem = false;
document.addEventListener("wheel", function (e) {
    console.log(closedItem)
    if(!closedItem) {
        if (e.deltaY < 0) {
            x -= 2;
            if(Math.ceil(x / spinWhenDegree) != Math.round(x / spinWhenDegree)) {
                console.log((Math.round(x / spinWhenDegree) * spinWhenDegree));
                console.log(x);
                x = Math.round(x / spinWhenDegree) * spinWhenDegree;
                $(".circle").css({"-webkit-transition": "800ms linear", "transform": "rotate(" + x + "deg)"});
                closedItem = true;
                setTimeout(function(){closedItem = false;$(".circle").css({"-webkit-transition": "100ms linear"});}, 800);
            }
        } else {
            x += 2;
            if(Math.floor(x / spinWhenDegree) != Math.round(x / spinWhenDegree)) {
                x = Math.round(x / spinWhenDegree) * spinWhenDegree;
                $(".circle").css({"-webkit-transition": "800ms linear", "transform": "rotate(" + x + "deg)"});
                closedItem = true;
                setTimeout(function(){closedItem = false;$(".circle").css({"-webkit-transition": "100ms linear"});}, 800);
            }
        }
        if(!closedItem) {
            $(".circle").css("transform", "rotate(" + x + "deg)");
        }
        
    }
    
});