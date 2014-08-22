# jSqncr
![jSqncr icon](http://i.imgur.com/oOeNcmb.jpg =200x);
## Overview
**jSqncr**, an ultra-easy, lightweight, and powerful way to buffer and play audio files in your browser!
## Setup
Run jSqncr.js in or codebase so you have access to the jSqncr object in the global namespace.
## Your First Sound
For convenience, I've hardcoded one sound into the library, which you may overwrite later. Let's first get this sound playing to ensure everything is working correctly. For now I suggest pasting jSqncr.js into your console for demonstration purposes.

Once you have access to jSqncr, you must initialize the existing sounds (there is only one at this point):

	jSqncr.initialize();

Now, you have access to the sound and can play it (the loaded sound's key is "that's awesome"):
	
	jSqncr.play("that's awesome");

Did you hear it? If so, that mean's your ready to start linking to your own sounds either remote or local.
## Customizing your sounds
After loading the library, you will have access to jSqncr.sounds, which is an object that stores keys, which are your sound titles, and an associated value, which is the location of the sound. For example:

    jSqncr.sounds = {
      "kick": "http://www.examplesounds.com/kick.wav",
      "snare": "/sounds/snare.mp3",
      "clap": "../clappityclap.aac"    
  	};

Everytime you either update the sounds or refresh the page, don't forget to:

	jSqncr.initialize();

Viola! Now you'll have all your own sounds loaded in your browser. Now if you run:

	jSqncr.play("kick");

You should hear your thumping kick drum!
## Considerations
Due to the nature of Javascript you will have to wait until the initialize function has completed retriving and buffering the sounds before you are given the ability to play them, this is quick process but may require the use of a callback if you wish to play a sound immediately once the sound(s) have loaded.
## Credit
Major credit goes to the makers of the HTML5 audio library and the folks below who's colaboration on this [music sequencer](jSequencr.herokuapp.com) helped inspire this project.

* [Grander Abuhoff](http://github.com/cranbury)
* [Drew Tunney](http://github.com/Tunneylax20)
* [Steven Weiss](http://github.com/stevenaweiss)
* [Zach Brady](http://github.com/zzzbra)

Enjoy!

