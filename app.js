document.addEventListener("DOMContentLoaded", function() {
   
   var points = 0;
   var startButton = document.getElementById("start");
   var initialTimeout;
   var seconds = 10000;
    startButton.onclick = function turnRed() {
        
       initialTimeout = setTimeout(function() {alert("Game over! You've got "+points+" point(s)!");}, seconds);
     
       var allSquares = [];
       var square = document.getElementsByClassName("btn");
       
       for (var i = 0; i < square.length; i++){
           
           allSquares.push(square[i]);
           
       }
       
       var squareNumber = Math.floor((Math.random() * square.length));
       var squareTurnedRed = allSquares[squareNumber];
       squareTurnedRed.style.backgroundColor = "red";
       squareTurnedRed.id = "red";
//       startButton.disabled = true;
       
       var redSquare = document.getElementById("red");
       
       redSquare.onclick = function clickedRed() {
           
           var redSquare = document.getElementById("red");
           clearTimeout(initialTimeout);
           seconds = seconds - 300;
           
           redSquare.style.backgroundColor = "powderblue";
           redSquare.removeAttribute("id");
           points = points + 1;
           console.log(squareNumber);
           
           turnRed();
       };
            
    };
   

   
   
   
   
   

});

