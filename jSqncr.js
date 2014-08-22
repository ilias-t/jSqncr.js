//Global jSqncr Object
window.jSqncr = {};

//Sound Queue
jSqncr.sounds = {"that's awesome": "https://s3.amazonaws.com/Sounds/Kevin.wav"};

//Initialization
jSqncr.initialize = function() {
  try {
    // Audio Context is defined
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    jSqncr.context = new AudioContext();

    //Sounds are buffered
    jSqncr.bufferLoader(jSqncr.context, jSqncr.sounds, jSqncr.finishedLoading);
    jSqncr.load(); //ref. audio_buffer_loader.js for full functionality
  }
  catch(e) {
    console.log(e);
  }
};

jSqncr.bufferLoader = function(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = {}; //changed bufferList to a hash from an array
  this.loadCount = 0;
};

//Function is called once sounds are buffered
jSqncr.finishedLoading = function(bufferList) {
  console.log("buffer is ready");
};

//Function that play's a sound in the Queue associated with the key passed in
jSqncr.play = function(key) {
  var targetSound = {};
  targetSound[key] = jSqncr.context.createBufferSource();
  targetSound[key].buffer = jSqncr.bufferList[key]; //error
  targetSound[key].connect(jSqncr.context.destination);
  targetSound[key].start(0); // play the source now
};

//HTML 5 Audio API—altered to accept an object, rather than an array of sounds
jSqncr.loadBuffer = function(url, key) { //changed index to key
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[key] = buffer;  //refactored the bufferList AudioBuffers to be a hash
        if (++loader.loadCount === Object.keys(loader.bufferList).length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  };

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  };

  request.send();
};

jSqncr.load = function() {
  for (var key in this.urlList) {
    this.loadBuffer(this.urlList[key], key);
  }
};