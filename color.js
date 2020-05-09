var noSquares = 6;
var colors = generateRandomColors(noSquares);

var pickedColor = colors[random()];
var colorName = document.querySelector("#final");
colorName.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
easyBtn.addEventListener("click",function(){
    messageDisplay.textContent = ""

    if(resetButton.textContent == "Play Again?")
    {
       
        resetButton.textContent = "New Colors";
    }
   noSquares =3
   h.style.backgroundColor = "steelblue"
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
     colors = generateRandomColors(noSquares);
 pickedColor = colors[random()];
 colorName.textContent = pickedColor;

 for(var i =0 ;i<squares.length;++i)

if(colors[i]){
squares[i].style.backgroundColor = colors[i];
}
else{
    squares[i].style.visibility = "hidden"

}
})
hardBtn.addEventListener("click",function(){
    messageDisplay.textContent = ""

    if(resetButton.textContent == "Play Again?")
    {
       
        resetButton.textContent = "New Colors";
    }
    h.style.backgroundColor = "steelblue"
    noSquares = 6
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
colors = generateRandomColors(noSquares);
 pickedColor = colors[random()];
 colorName.textContent = pickedColor;
 for(var i =0 ;i<squares.length;++i)
{squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = "visible"
}
})

resetButton.addEventListener("click",function(){
   
    if(resetButton.textContent == "Play Again?")
    {
       
        resetButton.textContent = "New Colors";
    }
    colors = generateRandomColors(noSquares);

    pickedColor = colors[random()];
    colorName.textContent = pickedColor;
    for(var i =0;i < squares.length;i++){
        if(colors[i])
        {squares[i].style.visibility = "visible";
        squares[i].style.backgroundColor = colors[i];}
        
    }
        
        messageDisplay.textContent = ""
        h.style.backgroundColor = "steelblue"
})
for(var i =0;i < squares.length;i++){
squares[i].style.backgroundColor = colors[i];
}
for(var i = 0 ;i<squares.length;++i)
{
    squares[i].addEventListener("click",function(){
        if(pickedColor==this.style.backgroundColor)
        {messageDisplay.textContent = "Correct!!";
          changeColor(pickedColor);
          resetButton.textContent = "Play Again?";
          h.style.backgroundColor = pickedColor;
        }
        else{ messageDisplay.textContent="try again";
            this.style.visibility = "hidden";
        }
    })
}
function changeColor(color){
    for(var i =0;i < squares.length;i++){
        if(colors[i])
        {squares[i].style.visibility = "visible";
        squares[i].style.backgroundColor = color;}
}
}
function random(){
    return Math.floor(Math.random()*colors.length)
}
function generateRandomColors(number){
var arr = []
for(var i =0;i<number;++i)
{
arr.push(randomColor());
}
return arr;

}
function randomColor(){
var r = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
    console.log(r)
    console.log(g)
    console.log(b)
var str = "rgb("+r+", "+g+", "+b+")";
return str
}
