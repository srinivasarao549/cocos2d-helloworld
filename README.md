Getting the code
----------------

This example includes cocos2d-javascript as a git submodule. To get all the code for this to run, do the following:

    git clone https://github.com/RyanWilliams/cocos2d-helloworld.git
    cd cocos2d-helloworld
    git submodule init
    git submodule update

Running this example
--------------------

To run through the development server simply execute:

    ./server.py

And visit <http://localhost:4000/>

Alternatively you can build to a static file which can be served from any webserver:

    ./make.py

The generated code will be in public/hello-world.js.

The code
--------

All the code for this example lives in src/main.js
