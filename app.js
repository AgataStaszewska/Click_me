document.addEventListener("DOMContentLoaded", function() {
   
   var points = 0;
   var startButton = document.getElementById("start");
   var initialTimeout;
//   var seconds = 30000; //COMMENT FOR 2ND VERSION
   
   //SECOND VERSION: JUST 1 SEC FOR EACH CLICK!
//   var seconds = 1000; //UNCOMMENT FOR 2ND VERSION
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
       startButton.disabled = true;
       
       var redSquare = document.getElementById("red");
       
       redSquare.onclick = function clickedRed() {
           
           var redSquare = document.getElementById("red");
//           clearTimeout(initialTimeout); //UNCOMMENT FOR 2ND VERSION
         
           redSquare.style.backgroundColor = "powderblue";
           redSquare.removeAttribute("id");
           points = points + 1;
           
           turnRed();
       };
            
    };
   

   
   
   
   
   

});

