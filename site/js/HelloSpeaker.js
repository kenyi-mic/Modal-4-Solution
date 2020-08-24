(function (window) {
    var helloSpeaker = {};
    helloSpeaker.name = prompt("Enter the second name: ");

    names = name;
    var speakWord = "Hello ";
    helloSpeaker.speak = function () {
      console.log(speakWord + helloSpeaker.name);
    }
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);
  