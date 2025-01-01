1.OPEN THE TERMINAL AND CD INTO THE FOLDER THAT HAS THE HTML FILE (VR MAP)
2. RUN THE PRECONFIGURED SERVER ON THE TERMINAL WITH : python3 -m http.server (notice that this server does NOT  alllow you to
use the map in VR mode on phone)
3.ON YOUR BROWSER COPY AND PASTE THIS LINE : http://0.0.0.0:8000/test_end 1 copy.HTML
TO OPEN THE AFRAME INSPECTOR ( SEE THE WHOLE 3D SCENE WITH AN EDITOR ): CLT+ALT+I ON YOUR BROWSER 
(notice that any changes will not be registered in the inspector unless edited in code ( or use aframe watcher))

GUIDE ON HOW TO EDIT THE SCENES :
1.Load the asset to the scene : in order to use the asset, picture, sound, you must load them in the <a-assets> tag like this :
<a-assets>
        <img id="parabol" src="assets/Nguyen_lab/parabol.JPG" /> //khai bao anh
        <img id="intersect1" src="assets/Nguyen_lab/intersect1.JPG" />
        <img id="intersect2" src="assets/Nguyen_lab/intersect2.JPG" />

        <img id="lake" src="assets/Nguyen_lab/lake.JPG" />
        <img id="TQB" src="assets/Nguyen_lab/TQB.JPG" />
        <img id="insideTQB" src="assets/Nguyen_lab/insideTQB.JPG" />

        <img id="arrow" src="assets/yajirusi.png" />
        <img id="close" src="assets/close.png" />
        <img id="info" src="assets/info.png" />
        <audio id="audio1" src="assets/audio1.mp3" preload="auto"></audio> //khai bao audio 
<a/assets>
later on, in the <a-scene>, if you want to use any of the assets , include the component src=#id_name in the entity 
for example :  <a-image id="right" src="#arrow" class="collidable" position="0 10000 11 " rotation="0 0 50"
      scale="3 0.5 1" opacity="0.8" visible=false move-controller></a-image>

2. arrow's position and rotation : 
+ open the index.js, scroll down to each location ( current == parabol, current == intersect,..): change the rotation component 
eg : arrow_foward.setAttribute("rotation", "0 90 0) (0 90 0 follows the direction of x y z with -z is facing you, y is upward and x is from left to right )
to edit the position, do similarly.

  if (current == "#parabol" ) {
                console.log("parabol")
                arrow_forward.setAttribute("visible", true);
                arrow_right.setAttribute("visible", true);
                arrow_back.setAttribute("visible", true);
                arrow_left.setAttribute("visible", true);


                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "2 3 2");
                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "0 1 -1" );

                
                arrow_right.setAttribute("rotation", "");
                arrow_back.setAttribute("rotation", "");
                arrow_left.setAttribute("rotation", "");
                arrow_forward.setAttribute("rotation", "");

            }
  
            if(current == "#lake") {
                console.log("lake1");
                sky.setAttribute("rotation", "0 -150 0");
                arrow_forward.setAttribute("visible", "false");
                arrow_right.setAttribute("visible", "false");
                arrow_back.setAttribute("visible", "false");
                arrow_left.setAttribute("visible", "true");

                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "2 3 2");
                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "3 3 3");


                arrow_right.setAttribute("rotation", " 0 90 0");
                arrow_back.setAttribute("rotation", "0 90 0");
                arrow_left.setAttribute("rotation", "0 90 0");
                arrow_forward.setAttribute("rotation", "0 90 0");

            }
    to change the OTHER entities THAN ARROW : adding with lines such as info_icon.setAttribute("postition", "a b c") accordingly to each if statement that has (current ==#scene_name)

 3. To add the audio to each scene :
 each scene (current) has a corresponding text and pic eg for scene 1 parabol : text1 and pic1.
 looking for the entity with id text 1, add the line  sound="src:#audio1;autoplay:false;refDistance:3" 
 adding the pciture similarly 
 like this : <a-entity id="text1"class="screen dark text1" sound="src:#audio1;autoplay:false;refDistance:3" htmlembed="ppu:256" position="0 2.5 -5" visible = "false">
        <div id="page1" class="tab1">

      <a-entity id="pic1" class="screen menu dark" htmlembed="ppu:256" position="-5 2.5 -5" rotation="0 45 0" visible ="false">
        <div id="page1" class="tab1">
         <img src ="assets/kateryna-kamenieva-wB5tjlA6Iv4-unsplash.jpg" width="auto" height="auto"></img> <!--please change the src = the pictures u wanna input-->
         </div>
      </a-entity>
    
 similarly, for scene 2 : intersect1  
looking for the entity with id text 2, add the line  sound="src:#audio2;autoplay:false;refDistance:3" 
4. Change the text of each scene : like in html, just edit between the <tag>
5. Change the size of the menu : for the entity that has htmlembed : change the ppu: higher sppu :smaller ,lower ppu : bigger. For style change : change in the corresponding class in the <style> 


NOTICE : each time changes is made : refresh the page 
if you see the changes in code  are not reflected correctly in the scene : use the inspector to see if they are hidden, or not lined properly 

THINGS I NEED YOU TO CHANGE : adding the text, sound and correct picture, changing the styling of the menus with what you usually do in css, to edit the appearance of the <a-gui-component_name> follow this github link:
https://rdub80.github.io/aframe-gui/ 
