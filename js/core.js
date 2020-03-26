x = 0;

function resizeScreen() {
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
}


$(window).resize(function () {
    resizeScreen();
})
resizeScreen();

let spinWhenDegree = 45;
closedItem = false;


$("#two, #six").bind('mousewheel', function () {
    if($(window).width() <= 700) {
        closedItem = true;
        setTimeout(function () {
            closedItem = false;
        }, 100)
    };
});

$('#two section, .employee section div, #five main article div, .mrContainer div, #seven section article .mrContainer div, #six .MRmenu').bind('mousewheel', function () {
    closedItem = true;
    setTimeout(function () {
        closedItem = false;
    }, 100)
});
$('.circle').bind('mousewheel', function (e) {
    if (!closedItem) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
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
    }
)
let rotationInfo = {
    c1: 90,
    c2: 180,
    c3: 315,
    c4: 45
};
$(".littleCircle").click(function () {
    rotate(rotationInfo[$(this).attr('id')])
})
let rotate = (value) => {
    console.log("here")
    x = value;
    closedItem = true;
    $(".circle").css({
        "-webkit-transition": "800ms linear",
        "transform": "rotate(" + x + "deg)"
    });
    setTimeout(function () {
        closedItem = false;
        $(".circle").css({
            "-webkit-transition": "100ms linear"
        });
    }, 800);
}

$("#two header h1, #five section h1, #eight footer h1, .employee .emLogo h1").click(function () {
    rotate(0);
});


$(".MRlogout").click(function () {
    $(".MRmenu").hide();
    $(".MRindex").css("display", "flex");
})

$(".MRindex .button").click(function () {
    $(".MRindex").hide();
    $(".MRmenu").css("display", "block");
})

$(".mrContainer button").click(function () {
    window.open('https://matteraknaren.com', '_blank');
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


$(".appIndex").click(function () {
    $(".appIndex").fadeOut();
    $(".appMenu").css("display", "flex");
})
$(".appMenuButton").click(function () {
    $(".appMenu").hide();
    $(".appIndex").css("display", "flex");
})
$(".shield").click(function () {
    $(".appMenu").hide();
    $(".appGame").css("display", "flex");
})
$(".appGameButton").click(function () {
    $(".appMenu").css("display", "flex");
    $(".appGame").hide();
})

$(".mrContainer").click(function () {
    if ($(window).width() < 1100) {
        $(".mainContainer").css("margin-left", "21.2vw");
    }
})
$(".appContainer").click(function () {
    if ($(window).width() < 1100) {
        $(".mainContainer").css("margin-left", "-42.4vw");
    }
})

$("#two section article h2").click(function () {
    $(`#${$(this).attr('value')}`).toggleClass("open");
})


let projectInfo = {
    card1: {
        color: '#73b0f4',
        title: 'Beställ en Hemsida',
        main: `
            <b>Things</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, quo necessitatibus, unde incidunt libero illo quae officia consequuntur optio sapiente tenetur atque, delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate unde accusamus magnam atque voluptate incidunt ipsum deleniti hic molestias quaerat.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <button></button>
        `
    },
    card2: {
        color: '#f76c82',
        title: 'MatteRäknaren',
        main: `
            <b>Things</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, quo necessitatibus, unde incidunt libero illo quae officia consequuntur optio sapiente tenetur atque, delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate unde accusamus magnam atque voluptate incidunt ipsum deleniti hic molestias quaerat.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <button></button>
        `
    },
    card3: {
        color: '#9579da',
        title: 'Utmana, Tävla, Vinn',
        main: `
            <b>Things</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, quo necessitatibus, unde incidunt libero illo quae officia consequuntur optio sapiente tenetur atque, delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate unde accusamus magnam atque voluptate incidunt ipsum deleniti hic molestias quaerat.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <button></button>
        `
    },
    card4: {
        color: '#97ca62',
        title: 'o44´s Kurser',
        main: `
            <b>Things</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, quo necessitatibus, unde incidunt libero illo quae officia consequuntur optio sapiente tenetur atque, delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate unde accusamus magnam atque voluptate incidunt ipsum deleniti hic molestias quaerat.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <button></button>
        `
    },
    card5: {
        color: '#fdcd56',
        title: 'Köp Steam-Bot',
        main: `
            <b>Things</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, quo necessitatibus, unde incidunt libero illo quae officia consequuntur optio sapiente tenetur atque, delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate unde accusamus magnam atque voluptate incidunt ipsum deleniti hic molestias quaerat.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <b>Others</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim mollitia ad ducimus quod ullam voluptatum quas eum animi quae? Magnam quam consequatur magni est quaerat quidem nesciunt, reiciendis ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad.</p>
            <button></button>
        `
    }
}

let activeProject = "hemsidor";
$(".card").click(function () {
    $(".card").toggleClass('heightToggle');

    let id = $(this).attr('id')
    setTimeout(function () {
        document.documentElement.style.setProperty('--projectColor', projectInfo[id].color)
        $("#five main article h1").text(projectInfo[id].title);
        $("#five main article div").empty();
        $("#five main article div").append(projectInfo[id].main);
        $(".card").toggleClass('heightToggle')
    }, 500);
})


$(".upwards").click(function () {
    x -= 45;
    x = Math.ceil(x / 45) * 45;
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
});
$(".downwards").click(function () {
    x += 45;
    x = Math.floor(x / 45) * 45;
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
});



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