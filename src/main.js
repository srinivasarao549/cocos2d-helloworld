// Import the cocos2d module
var cocos = require('cocos2d'),
// Import the geometry module
    geo = require('geometry');

// Create a new layer
var HelloWorld = cocos.Layer.extend({
    init: function() {
        // You must always call the super class version of init
        @super;

        // Get size of canvas
        var s = cocos.Director.get('sharedDirector.winSize');

        // Create label
        var label = cocos.Label.create({string: 'Hello, World!', fontName: 'Arial', fontSize: 76});

        // Add label to layer
        this.addChild({child: label, z:1});

        // Position the label in the centre of the view
        label.set('position', geo.ccp(s.width / 2, s.height / 2));
    }
});

// Initialise everything

// Get director
var director = cocos.Director.get('sharedDirector');

// Attach director to our <div> element
director.attachInView(document.getElementById('hello-world'));

// Create a scene
var scene = cocos.Scene.create();

// Add our layer to the scene
scene.addChild({child: HelloWorld.create()});

// Run the scene
director.runWithScene(scene);
