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
    if (!closedItem) {
        if (e.deltaY < 0) {
            x -= 2;
            if (Math.ceil(x / spinWhenDegree) != Math.round(x / spinWhenDegree)) {
                console.log((Math.round(x / spinWhenDegree) * spinWhenDegree));
                console.log(x);
                x = Math.round(x / spinWhenDegree) * spinWhenDegree;
                $(".circle").css({
                    "-webkit-transition": "800ms linear",
                    "transform": "rotate(" + x + "deg)"
                });
                closedItem = true;
                setTimeout(function () {
                    closedItem = false;
                    $(".circle").css({
                        "-webkit-transition": "100ms linear"
                    });
                }, 800);
            }
        } else {
            x += 2;
            if (Math.floor(x / spinWhenDegree) != Math.round(x / spinWhenDegree)) {
                x = Math.round(x / spinWhenDegree) * spinWhenDegree;
                $(".circle").css({
                    "-webkit-transition": "800ms linear",
                    "transform": "rotate(" + x + "deg)"
                });
                closedItem = true;
                setTimeout(function () {
                    closedItem = false;
                    $(".circle").css({
                        "-webkit-transition": "100ms linear"
                    });
                }, 800);
            }
        }
        if (!closedItem) {
            $(".circle").css("transform", "rotate(" + x + "deg)");
        }

    }

});




$(".littleCircle").hover(
    function () {
        $(this).find("h1").show();
    },
    function () {
        $(this).find("h1").hide();
    })


$(".MRlogout").click(function () {
    $(".MRmenu").hide();
    $(".MRindex").css("display", "flex");
})

$(".MRindex .button").click(function () {
    $(".MRindex").hide();
    $(".MRmenu").css("display", "block");
})

$(".mrContainer button").click(function () {
    location.replace("https://matteraknaren.com/")
})
$(".backButton").click(function () {
    $(".MRgame").hide();
    $(".MRmenu").css("display", "block");
})
$(".MRplay").click(function () {
    $(".MRgame").css("display", "flex");
    newQuesiton();
    $(".MRmenu").hide();
})





// MR Question : 
let answer;
let onQuestion = 1;
let score = 0;
let upg = {
    addition: {
        numbers: {
            one: {
                from: 0,
                to: 10
            },
            two: {
                from: 0,
                to: 10
            }
        },
        instructions: [ // OBS : bara ene ekvation i taget, dvs endast med 2 tal!
            "answer=one + two",
            "question=one + two"
        ]
    },
    subtraction: {
        numbers: {
            one: {
                from: 0,
                to: 10
            },
            two: {
                from: 0,
                to: 10
            }
        },
        instructions: [
            "answer=one",
            "three=two + answer",
            "question=three - two"
        ]
    }
}
let renderTasks = () => {
    let list = [];
    for (value in upg) {
        list.push(value);
    }
    return list;
}
let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let getAllNumbers = (task) => {
    let output = {};
    for (value in upg[task].numbers) {
        output[value] = getRndInteger(upg[task].numbers[value].from, upg[task].numbers[value].to);
    }
    return output;
}


let decode = (task) => {
    let items = getAllNumbers(task);
    for (var i = 0; i < upg[task].instructions.length; i++) {
        let setTo = upg[task].instructions[i].split("=")[0].trim();
        let rest = upg[task].instructions[i].split("=")[1];
        for (value in items) {
            rest = rest.replace(new RegExp(value, 'g'), items[value]);
        }
        if (setTo == "question") {
            items[setTo] = rest;
        } else {
            items[setTo] = eval(rest);
        }
    }
    return items
}

let newQuesiton = () => {
    let renderedTasks = renderTasks();
    let task = renderedTasks[getRndInteger(0, renderedTasks.length)];
    let taskInfo = decode(task);
    $(".question").text(taskInfo.question);
    answer = taskInfo.answer;
}
let checkAnswer = () => {
    let userInput = $(".userinput").val();
    if (userInput == "") return;
    if (userInput == answer) {
        console.log("Right Answer!");
        onQuestion++;
        score += 100;
        $(".scoreBox h2").text(score);
        if (onQuestion > 10) onQuestion = 1
        $(".progress div").css("width", onQuestion * 10 + "%");
        newQuesiton();
    } else {
        alert("Wrong Answer!");
    }
    $(".userinput").val("");
}

$(".doneButton").click(function () {
    checkAnswer();
})
$(".userinput").keypress(function (e) {
    if (e.which == 13) {
        checkAnswer();
    }
});