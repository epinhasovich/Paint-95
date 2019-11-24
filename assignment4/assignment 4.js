let x;
let y;

let brushColor = "black"

mousedown = false;

function cursorPosition(event) {
    let rect = board.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
}

let symbol = document.createElement("img");

symbol.setAttribute("src", "./pics/_request_windows_95_vector_with_speedpaint__by_windytheplaneh_d9p4i3w-pre.png");
document.getElementsByTagName("BODY")[0].append(symbol);

let whiteBoard = document.createElement("div");

whiteBoard.setAttribute("id", "board");
document.getElementsByTagName("BODY")[0].append(whiteBoard);

let toolbar = document.createElement("div");

toolbar.setAttribute("class", "toolbar");
document.getElementsByTagName("BODY")[0].append(toolbar);

let options = document.createElement("div")

options.setAttribute("id", "options");
document.getElementsByClassName("toolbar")[0].append(options);

let array = [["white"], ["red"], ["blue"], ["green"], ["purple"], ["gray"], ["yellow"], ["orange"], ["black"]]

for (i = 0; i < array.length; i++) {
    color = array[i];
    var colorButton = document.createElement("button");
    colorButton.setAttribute("id", color);
    colorButton.setAttribute("class", "color-button");
    document.getElementById("options").prepend(colorButton);
    document.getElementById(color).style.backgroundColor = color;
}
let clearButton = document.createElement("button");

clearButton.setAttribute("id", "clear");
clearButton.setAttribute("class", "color-button");
document.getElementById("options").append(clearButton);

let sizeForm = document.createElement("div");

sizeForm.setAttribute("id", "sizeControl");
document.getElementById("options").append(sizeForm);

let sizes = document.createElement("select");

sizes.setAttribute("id", "size");
document.getElementById("options").append(sizes);

let choices = [["small"], ["medium"], ["large"]]

for (i = 0; i < choices.length; i++) {
    choice = choices[i];
    var sizeButton = document.createElement("option");
    sizeButton.setAttribute("id", choice);
    sizeButton.setAttribute("value", choice);
    document.getElementById("size").append(sizeButton);
    document.getElementById(choice).innerHTML = choice;
}

let canvasSize = document.createElement("div");

canvasSize.setAttribute("id", "inputs");
document.getElementById("options").append(canvasSize);

let inputGroup = document.createElement("span");

inputGroup.setAttribute("class", "input-group");
document.getElementById("inputs").append(inputGroup);

let inputControl = document.createElement("span");

inputControl.setAttribute("class", "input-group-addon");
document.getElementsByClassName("input-group")[0].append(inputControl);
document.getElementsByClassName("input-group-addon")[0].innerHTML = "Width ";

let dimensions = document.createElement("input");

dimensions.setAttribute("type", "number");
dimensions.setAttribute("id", "sizeY");
dimensions.setAttribute("class", "form-control sizeWidth");
dimensions.setAttribute("placeholder", "sizeY");
dimensions.setAttribute("value", "500");
document.getElementsByClassName("input-group")[0].append(dimensions);

let inputGroup2 = document.createElement("span");

inputGroup2.setAttribute("class", "input-group");
document.getElementById("inputs").append(inputGroup2);

let inputControl2 = document.createElement("span");

inputControl2.setAttribute("class", "input-group-addon");
document.getElementsByClassName("input-group")[1].append(inputControl2);
document.getElementsByClassName("input-group-addon")[1].innerHTML = "Height ";

let dimensions2 = document.createElement("input");

dimensions2.setAttribute("type", "number");
dimensions2.setAttribute("id", "sizeX");
dimensions2.setAttribute("class", "form-control sizeHeight");
dimensions2.setAttribute("placeholder", "sizeX");
dimensions2.setAttribute("value", "500");
document.getElementsByClassName("input-group")[1].append(dimensions2);

let update = document.createElement("input");

update.setAttribute("type", "button");
update.setAttribute("class", "updateSize btn btn-success");
update.setAttribute("value", "Update");
update.setAttribute("id", "boardupdate");
document.getElementById("inputs").append(update);

let board = document.getElementById('board');

board.addEventListener('mousedown', checkMouse);
board.addEventListener('mousedown', draw);
board.addEventListener('mousemove', draw);
board.addEventListener('mouseup', checkMouse2);

let height = 5;
let width = 5;

function draw(color) {
    if (mousedown) {
        let newDiv = document.createElement("div")
        board.appendChild(newDiv);
        cursorPosition(event);
        newDiv.style.position = 'absolute';
        newDiv.style.left = x + 'px';
        newDiv.style.top = y + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.backgroundColor = brushColor;
        newDiv.style.display = 'inline-block';
        newDiv.className = "newDiv";
    }
}

function checkMouse() {
    mousedown = true;
}

function checkMouse2() {
    mousedown = false;
}

let btn = $(".color-button");

btn.on("click", function addColor() {
    brushColor = this.id;
})

let reset = $("#clear");

reset.on("click", clear);

function clear() {
    let divs = $(".newDiv");
    for (let item of divs) {
        item.remove();
    }
}

document.getElementById("size").addEventListener("change", changeSize);

function changeSize(event) {
    let clickSize = event.target;
    if (clickSize.value === "small") {
        height = 5;
        width = 5;
    } else if (clickSize.value === "medium") {
        height = 20;
        width = 20;
    } else if (clickSize.value === "large") {
        height = 50;
        width = 50;
    }
}

function changeBoard() {
    whiteBoard.style.width = parseInt(document.getElementById("sizeY").value) + "px";
    whiteBoard.style.height = parseInt(document.getElementById("sizeX").value) + "px";
    whiteBoard.style.zIndex = 8;
    whiteBoard.style.position = "absolute";
    whiteBoard.style.boxShadow = "3px 3px 5px 6px #ccc";
    document.getElementsByTagName("BODY")[0].appendChild(whiteBoard);
}

document.getElementById("boardupdate").addEventListener("click", function () {
    changeBoard();
    draw();
})
