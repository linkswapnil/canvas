(function () {
    'use strict';
    var canvasA = new fabric.Canvas('canvas1');
    canvasA.add(new fabric.Text("Canvas A", {left: 10, top: 20, lockMovementX: true, lockMovementY: true}));

    var canvasB = new fabric.Canvas('canvas2');
    canvasB.add(new fabric.Text("Canvas B", {left: 10, top: 20, lockMovementX: true, lockMovementY: true}));
})();
