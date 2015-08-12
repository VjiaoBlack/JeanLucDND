if (document.cookies) {
    data = document.cookies;
    alert(data);
    var result = JSON.parse(data);

    for (var i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        document.getElementById(id).children[0].value = result[id];
    }
}

var positions = {
    name: [8.5, 2.75, 17.5, 2.5],
    surname: [10.5, 5.5, 15.5, 2.5],
    title: [7.5, 8.25, 18.5, 2.5],
    alias: [16, 11, 10, 2.5],
    date: [29.1, 4.5, 5.58, 4],
    techniques: [3.04, 24.6, 18.16, 60],

    str: [43.4, 13, 0, 0],
    dex: [26.66, 40, 0, 0],
    con: [33, 75, 0, 0],
    "int": [70.68, 13, 0, 0],
    wis: [88.04, 40, 0, 0],
    cha: [82, 75, 0, 0],
    com: [57, 90, 0, 0],

    strtrait: [48.5, 25.5, 0, 0],
    dextrait: [39.7, 40.6, 0, 0],
    contrait: [42.5, 58.5, 0, 0],
    inttrait: [63.5, 25.5, 0, 0],
    wistrait: [72.8, 40.2, 0, 0],
    chatrait: [69.3, 59, 0, 0],
    comtrait: [55.8, 67.5, 0, 0],

    maxhp: [53.5, 44, 3, 3],
    currenthp: [65, 44, 3, 3],

    actouch: [58.5, 48, 4, 3],
    acfull: [58.5, 55, 4, 3],

    skills: [56.3, 7, 8, 11.5],
    condition: [33.5, 22, 9, 8],
    languages: [79.5, 21, 8, 9],


    exp: [24.8, 53, 5, 3],
    classlevel: [33.3, 54.25, 6, 5],
    nextlevel: [27.8, 62.5, 5, 2.3],

    reflexsave: [46, 75, 5, 3],
    fortsave: [42.25, 83.25, 5, 2.5],
    willsave: [45.5, 91, 5, 3],

    height: [68.25, 74.5, 3, 2],
    build: [74, 75, 3, 2],
    weight: [65.4, 80.5, 3, 2],
    eyes: [70.75, 80.5, 3.4, 2],
    skin: [76.2, 82, 3.4, 2],
    race: [68.2, 87, 4, 2],
    ethnicity: [73.75, 88.5, 4, 2],
    hair: [80.5, 86.2, 4, 2],

    birthday: [84.25, 50, 3.75, 2.75],
    age: [80.25, 55.5, 3, 2],
    deity: [90.5, 53, 5, 5],
    handedness: [84.75, 61, 4.5, 2.5],
    ethics: [91.5, 63.5, 3, 2],

    armorcheck: [16.25, 89.5, 10, 4.25]
}

function save() {

    var data = {};

    var inputs = document.getElementsByTagName("div");

    for (var i = 0; i < inputs.length; i++) {
        data[ inputs[i].id ] = inputs[i].children[0].value;
    }


    alert("Copy this JSON:\n" + JSON.stringify(data) );

}

function load() {
    var data = prompt("Enter the JSON here:\n");
    var result = JSON.parse(data);

    for (var i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        document.getElementById(id).children[0].value = result[id];
    }
}

function save_cookies() {

    var data = {};

    var inputs = document.getElementsByTagName("div");

    for (var i = 0; i < inputs.length; i++) {
        data[ inputs[i].id ] = inputs[i].children[0].value;
    }


    document.cookies = "data=" + JSON.stringify(data) + "; expires=Fri, 14 Aug 2015 12:00:00 UTC";
    alert(document.cookies);
}


window.onload = function() {

    var width = 3300;
    var height = 2550;
    var widthOverHeight = width / height;

    var curRatio = window.innerWidth / window.innerHeight;
    var w, h;


    if (curRatio <= widthOverHeight) {
        w = window.innerWidth / 100;
        h = window.innerWidth / (100 * widthOverHeight);
    } else {
        w = window.innerHeight * widthOverHeight / 100;
        h = window.innerHeight / 100;
    }

    for (id of Object.keys(positions)) {

        var element = document.getElementById(id);
        element.style.left = positions[id][0] * w + "px";
        element.style.top = positions[id][1] * h + "px";
        if (positions[id][2] > 0) {
            element.style.width = positions[id][2] * w + "px";
            element.style.height = positions[id][3] * h + "px";
        } else if (element.className == "stat") {
            element.style.width = 6 * w + "px";
            element.style.height = 6 * h + "px";
        } else if (element.className == "trait") {
            element.style.width = 9 * w + "px";
            element.style.height = 9 * h + "px";
        }

    }
}

window.onresize = window.onload;


