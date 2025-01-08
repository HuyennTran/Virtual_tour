I SET UP AND DEPENDENCIES:
You can run the program in 3 ways either with liveserver, through a http server on python or use the nghttp2 library to enable https.
1.1 IMPLEMENT WITH LIVESERVER
Step1: Open VSCode, on the Extension tab, install liveserver.
Step2: In the index.html : REPLACE the block:
<script src="./src/aframe-animation-component.min.js"></script>
    <script src="./src/aframe.min.js"></script>
    <link href="src/font/Roboto" rel="stylesheet">
    <script src="/src/aframe-gui.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">


    <script src="./src/aframe-event-set-component.min.js"></script>
    <script src="./src/TDSLoader.js"></script>
    <script src="./src/font/5.15.4/css/all.min.css"></script>
    <script src ="./src/aframe-extras.min.js" ></script>
    <script src ="./src/build.js" ></script>

    <script src="./index.js"></script>

    
  
    <link rel="stylesheet" href="./WEBVR/style.css"> 
    <script src="./WEBVR/script.js" defer></script>
    <link rel="stylesheet" href="./src/font/Material-symbol-outlined.css" />
    <link rel="stylesheet" href="./src/font/Material-symbol-rounded.css"/>

WITH:
<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <script src="https://supereggbert.github.io/aframe-htmlembed-component/dist/build.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
    <script src="https://unpkg.com/three@0.131.3/examples/js/loaders/TDSLoader.js"></script>
    <script src="https://unpkg.com/aframe-animation-component@^4.1.2/dist/aframe-animation-component.min.js"></script>
    <script src ="https://rawgit.com/rdub80/aframe-gui/master/dist/aframe-gui.min.js"></script>
    <script src ="https://unpkg.com/aframe-extras@6.1.0/dist/aframe-extras.min.js" ></script>

    <script src="./index.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    
  
    <link rel="stylesheet" href="./WEBVR/style.css"> 
    <script src="./WEBVR/script.js" defer></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />

Step3: In the index.html: search for 10.42.0.1:12345 and replace all of the with YOUR CURRENT IP AND PORT
Step4 :Right click on the index.html file and choose : Open with lveserver

NOTE : This method will not grant you an https server, therefore, unable to use in Immersive mode in VR or view the 360 images dynamically on phone 

1.2 IMPLEMENT WITH PYTHON:
- You must pre-installed Python first to use this method
- Repeat Step2 and 3 from the above
- To run with python on your terminal:
python3 -m http.server
- The server will default as http://0.0.0.0:8000/

NOTE : This method will not grant you an https server, therefore, unable to use in Immersive mode in VR or view the 360 images dynamically on phone 

1.3.IMPLEMENT WITH NGHTTP2: (PEER TO PEER CONNECTION)
Step1 : Install and build the library following the instructions at : https://github.com/nghttp2/nghttp2
Step2 : On your wifi settings, turn on Wifi-hotspot
Step3 : In index.html,src,font, start_server : Find 10.42.0.1:12345 and replace them with your CURRENT IP and PORT 12345
Step4 : In start_server.sh : change the SERVER_DIRECTORY to your directory
On terminal bash start_server.sh
A server is now hosting at : https://your_ip:12345/

NOTE : this method fully enables https, and can be used in VRheadset Immersive mode.


