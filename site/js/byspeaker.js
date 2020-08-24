(function (window) {
    var byeSpeaker = {};
    byeSpeaker.name = prompt("Enter the first name: ");
    names = name;
    var speakWord = "Good bye ";
    byeSpeaker.speak = function () {
      console.log(speakWord + byeSpeaker.name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })(window);
  