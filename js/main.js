(function () {
    'use strict';
    var canvasA = new fabric.Canvas('canvas1');
    canvasA.add(new fabric.Text("Canvas A", {left: 10, top: 20, lockMovementX: true, lockMovementY: true}));

    var canvasB = new fabric.Canvas('canvas2');
    canvasB.add(new fabric.Text("Canvas B", {left: 10, top: 20, lockMovementX: true, lockMovementY: true}));

    var rectangleControl = document.getElementById('rectangle');
    var circleControl = document.getElementById('circle');

    rectangleControl.onclick = function () {
        var rect = new fabric.Rect({
            left: 60,
            top: 70,
            width: 150,
            height: 75,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2
        });
        canvasA.add(rect);
    };

    circleControl.onclick = function () {
        var circle = new fabric.Circle({
            left: 40,
            top: 40,
            radius: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2
        });
        canvasA.add(circle);
    };

})();
