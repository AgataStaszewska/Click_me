document.addEventListener("DOMContentLoaded", function() {
   
   var points = 0;
   var startButton = document.getElementById("start");
    startButton.onclick = function turnRed() {
        
        var initialTimeout = setTimeout(function() {
           
           alert("Game over! You've got "+points+" point(s)!");
           
                              }, 3000);
       
       var allSquares = [];
       var square = document.getElementsByClassName("btn");
       
       for (var i = 0; i < square.length; i++){
           
           allSquares.push(square[i]);
           
       }
       
       var squareNumber = Math.floor((Math.random() * square.length) + 1);
       var squareTurnedRed = allSquares[squareNumber];
       squareTurnedRed.style.backgroundColor = "red";
       squareTurnedRed.id = "red";
       startButton.disabled = true;
       
       var redSquare = document.getElementById("red");
       
       redSquare.onclick = function clickedRed() {
           
           clearTimeout(function(initialTimeout) {});
           
           redSquare.style.backgroundColor = "powderblue";
           redSquare.removeAttribute("id");
           points = points + 1;
           setTimeout(function() {
           
           alert("Game over! You've got "+points+" point(s)!");
           
           }, 3000);
           console.log(points);
           
           turnRed();
       };
            
    };
   

   
   
   
   
   

});

