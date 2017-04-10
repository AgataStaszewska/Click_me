document.addEventListener("DOMContentLoaded", function() {

   var startButton = document.getElementById("start");

    startButton.onclick = function turnRed(){
       
       var allSquares = [];
       var square = document.getElementsByClassName("btn");
       
       for (var i = 0; i < square.length; i++){
           
           allSquares.push(square[i]);
           
       }
       
       var squareNumber = Math.floor((Math.random() * square.length) + 1);
       var squareTurnRed = allSquares[squareNumber];
       squareTurnRed.style.backgroundColor = "red";
       startButton.disabled = true; 
        
    };
   
   
   
   
   
   
   

});

