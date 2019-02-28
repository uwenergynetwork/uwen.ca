var pattern = 
[
    [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9],
    [0], [1], [2], [3], [4], [5], [6], [7], [8], [9],
    [8], [7], [6], [5], [4], [3], [2], [1], [0],
    [1, 6], [2, 7], [3, 8], [4, 9], [3, 8], [2, 7], [1, 6], [0, 5],
    [1, 8], [2, 7], [3, 6], [4, 5], [5, 4], [6, 3], [7, 2], [8, 1], [9, 0],
    [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9],
    [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [1, 3, 5, 7, 9],
];
var index = 0;

window.setInterval(function () {
    var lightbulbs = document.getElementsByClassName("light-bulb");
    for (var i = 0; i < 10; i++) {
        
        if (pattern[index % pattern.length].includes(i)) {
            lightbulbs[i].src = "img/hacks/lightbulb-on.png";
        } else {
            lightbulbs[i].src = "img/hacks/lightbulb.png";
        }
    }
    index++;
}, 200);