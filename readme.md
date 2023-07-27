# jSqncr.js
-----

## Update

This library is depreciated and can be solved by creating a new instance of the [HTML5 Audio element](http://www.w3.org/TR/html/embedded-content-0.html#the-audio-element):
```
const audioTagInstance = new Audio();
```

## Setup
To buffer and play audio files with javascript, include the the jSquncr.js in your project.
## Customizing your sounds
Once the library is loaded, you will have access to jSqncr.sounds, a key-value store for semantic sound triggers. For example:

    jSqncr.sounds = {
      "kick": "http://www.examplesounds.com/kick.wav",
      "snare": "/sounds/snare.mp3",
      "clap": "../clappityclap.aac"
  	};

On page load or when adding sounds to your key-value store, you can then buffer (aka load into memory) your audio files from their sources by calling:

	jSqncr.initialize();

Viola! Now you'll have all your own sounds loaded in your browser. Now if you run:

	jSqncr.play("kick");

You should hear your thumping kick drum!
## Considerations
Due to the nature of Javascript you will have to wait until the initialize function has completed retriving and buffering the sounds before you are given the ability to play them, this is quick process but may require the use of a callback if you wish to play a sound immediately once the sound(s) have loaded.
## Credit
Major credit goes to the makers of the HTML5 audio library and the folks below who's colaboration on this [music sequencer](http://jSequencr.herokuapp.com) helped inspire this project.

* [Grander Abuhoff](http://github.com/cranbury)
* [Drew Tunney](http://github.com/drewtunney)
* [Steven Weiss](http://github.com/stevenaweiss)
* [Zach Brady](http://github.com/zzzbra)

Enjoy!

