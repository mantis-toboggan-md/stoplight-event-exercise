(function() {
  'use strict';
document.addEventListener("DOMContentLoaded", function(){
  var stopButtonEl = document.querySelector("#stopButton");
  var slowButtonEl = document.querySelector("#slowButton");
  var goButtonEl = document.querySelector("#goButton");

  stopButtonEl.addEventListener("click", function addStop(){
    document.querySelector("#stopLight").classList.toggle("stop")
  });
  slowButtonEl.addEventListener("click", function addSlow(){
    document.querySelector("#slowLight").classList.toggle("slow")
  });
  goButtonEl.addEventListener("click", function addGo(){
    document.querySelector("#goLight").classList.toggle("go")
  });

  var buttonArr = document.querySelectorAll(".button");

  for(var i = 0; i < buttonArr.length; i++){
    buttonArr[i].addEventListener("mouseenter", function(){
    console.log(`Entered ${event.target.textContent} button`)
    })
    buttonArr[i].addEventListener("mouseleave", function(){
      console.log(`Left ${event.target.textContent} button`)
    })
  };
  document.querySelector("#controls").addEventListener("click", function(){
    var action = event.target.innerText.toLowerCase();
    if(document.querySelector(`#${action}Light`).classList.contains(action)){
      console.log(`${action} bulb on`)
    }
    else{
      console.log(`${action} bulb off`)
    }
  })
});
})();
