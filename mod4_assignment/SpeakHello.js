
(function (window) {
	var helloSpeaker = {};
	helloSpeaker.name = {};
	var speakWord = "Hello";


helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
} 
   window.helloSpeaker = helloSpeaker;

})(window);


