var flag = 0;

AFRAME.registerComponent('move-controller', {   //mouse-click controller 
    dependencies:['raycaster'],
    //at the beginning of the cycle :
    init : function (){  
        console.log("move-controller");

        this.el.addEventListener("click", function(e) {
    
            const sky =  document.getElementById("sky");

          
            const info_icon = document.getElementById("infob");
            const close_icon = document.getElementById("closeb");
       
   
            const label2 = document.getElementById("Audio"); // Note the typo in ID ("lable2")
            const label3 = document.getElementById("Map");
            const label1 = document.getElementById("Language");
            const container = document.getElementById("container");

            const tab1  = document.getElementById("text1");
            const tab2  = document.getElementById("text2");
            const tab3  = document.getElementById("text3");
            const tab4  = document.getElementById("text4");

            const pic1 = document.getElementById("pic1");
            const pic2 = document.getElementById("pic2");
            const pic3 = document.getElementById("pic3");
            const pic4 = document.getElementById("pic4");


           
          
            /*-----------------------------------------------------------------------------------------------------*/

          

            info_icon.addEventListener('click', function () {
                this.setAttribute("visible", false);
                switch (current) {
                    case "#parabol":
                        console.log("parabol clicked");
                        tab1.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
                        pic1.setAttribute("visible", 'true');
                        container.setAttribute("position","5 2.5 -5"); 
                        close_icon.setAttribute("visible", "true");
                        console.log('Text visibility set to true');
                        flag = 1;
                        break;
                      case "#lake":
                        tab2.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
                        pic2.setAttribute("visible", 'true');
                        container.setAttribute("position","3 2.5 -5");

                        close_icon.setAttribute("visible", "true");
                        console.log('Text visibility set to true');
                        flag = 1;
                        break;
                      case "#TQB":
                        tab3.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
                        pic3.setAttribute("visible", 'true');
                        container.setAttribute("rotation", "0 135 0")
                        container.setAttribute("position","-4.15 2.9 4"); 
                        close_icon.setAttribute("visible", "true");
                        close_icon.setAttribute("position", "-1.65 3.6 3.645");
                        console.log('Text visibility set to true');
                        flag = 1;
                        break;
    
                   }
        
             });

            close_icon.addEventListener('click', function () {
              switch (current) {
                  case "#parabol":
                      tab1.setAttribute('visible', 'false'); 
                      pic1.setAttribute('visible', 'false'); 
                      container.setAttribute("position", "-10000 2.5 -6"); 
                      console.log("Flag value before checking:", flag);
                      if (flag == 1) {
                          console.log("close button visibility set to 0");
                          close_icon.setAttribute("visible", "false");
                          flag = 0;
                      }
                      break;
                  case "#lake":
                      tab2.setAttribute('visible', 'false'); 
                      pic2.setAttribute('visible', 'false'); 
                      container.setAttribute("position", "-10000 2.5 -6"); 
                    
                      tab2.sound.autoplay = "true";
                      if (flag == 1) {
                          close_icon.setAttribute("visible", "false"); 
                          flag = 0;
                      }
                      break;
                  case "#TQB":
                      tab3.setAttribute('visible', 'false'); 
                      pic3.setAttribute('visible', 'false'); 
                      container.setAttribute("position", "-10000 2.5 -6"); 
                    
                      tab3.sound.autoplay = "true";
                      if (flag == 1) {
                          close_icon.setAttribute("visible", "false"); 
                          flag = 0;
                      }
                      break;
              }
          });

            
            if (arrow_forward.getAttribute('opacity') == 1 && arrow_forward.getAttribute('visible') == true){
                console.log("arrow forward clicked");
                current = map_forward.get(current);
              sky.setAttribute('src', current);
            }
            if (arrow_back.getAttribute('opacity') == 1 && arrow_back.getAttribute('visible') == true){
                console.log("arrow back clicked");
                current = map_back.get(current);
              sky.setAttribute('src', current);
            }
            if (arrow_right.getAttribute('opacity') == 1 && arrow_right.getAttribute('visible') == true){
                console.log("arrow right clicked");
                current = map_right.get(current);
              sky.setAttribute('src', current);
            }
            if (arrow_left.getAttribute('opacity') == 1 && arrow_left.getAttribute('visible') == true){
                console.log("arrow left clicked");
                current = map_left.get(current);
              sky.setAttribute('src', current);
            }

            if (current == "#parabol" ) {
                sky.setAttribute("rotation", "0 270 0");
                console.log("parabol")
                 console.log("parabol")
                 arrow_forward.setAttribute("visible", true);
                 arrow_right.setAttribute("visible", false);
                 arrow_back.setAttribute("visible",false);
                 arrow_left.setAttribute("visible", false);
                 arrow_back.setAttribute("position", "2 3 2");
 
                 arrow_forward.setAttribute("position", "0 1 2.5");

                info_icon.setAttribute("visible", true);

            }
  
            if(current == "#lake") {
        

                console.log("lake1");
                sky.setAttribute("rotation", "0 0 0");
                arrow_forward.setAttribute("visible", "false");
                arrow_right.setAttribute("visible", "false");
                arrow_back.setAttribute("visible", "false");
                arrow_left.setAttribute("visible", "true");

                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "2 3 2");
                arrow_left.setAttribute("position", " 1 1 -1.5 ");
                

                arrow_forward.setAttribute("position", "3 3 3");


                arrow_right.setAttribute("rotation", " 0 90 0");
                arrow_back.setAttribute("rotation", "0 90 0");
                arrow_left.setAttribute("rotation", "90 90 0");
                arrow_forward.setAttribute("rotation", "0 90 0");

                
                info_icon.setAttribute("visible",true);
                info_icon.setAttribute("rotation","0 90 0")
                info_icon.setAttribute("position", "-2.75 1 -1.5");
               
                close_icon.setAttribute("visible", false);
                

            }
            if (current == "#intersect1") {
       

                sky.setAttribute("rotation", "0 75 0");
                console.log("i'm currently at :", current);
                arrow_forward.setAttribute("visible", "true");
                arrow_right.setAttribute("visible", "false");
                arrow_back.setAttribute("visible", "true");
                arrow_left.setAttribute("visible", "false");


                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "0.75 1 -4");
              
                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "-0.5 1.4 1");
             


                arrow_right.setAttribute("rotation", "");
                arrow_back.setAttribute("rotation", "0 1 -1");
                arrow_forward.setAttribute("rotation", "45 0 0");
               

                info_icon.setAttribute("visible", "false");

    

            }
                if (current == "#intersect2") {
                sky.setAttribute("rotation", "0 0 0");
                console.log("intersect2");
                arrow_forward.setAttribute("visible", true);
                arrow_right.setAttribute("visible", true);
                arrow_back.setAttribute("visible", true);
                arrow_left.setAttribute("visible", false);

                arrow_right.setAttribute("position", "-4 1 0.25");
               
                arrow_back.setAttribute("position", "-0.75 1 -4");
               

                arrow_left.setAttribute("position", " 3.4 2 2 ");
                arrow_forward.setAttribute("position", "1.25 1 1.5");
        

                arrow_right.setAttribute("rotation", "0 90 0");
                arrow_back.setAttribute("rotation", "0 0 0");
         
                arrow_forward.setAttribute("rotation", "45 90 0");

                info_icon.setAttribute("visible",false);

            }
            
            if (current == "#TQB") {
       

              sky.setAttribute("rotation", "0 84 10");
            
              console.log("TQB");
              arrow_forward.setAttribute("visible", true);
              arrow_right.setAttribute("visible", true);
              arrow_back.setAttribute("visible", false);
              arrow_left.setAttribute("visible", false);

              arrow_right.setAttribute("position", "0 0.5 2.5");
            

              arrow_forward.setAttribute("position", "-7 0 0");
          

              arrow_right.setAttribute("rotation", "0 0 0");
              arrow_forward.setAttribute("rotation", "0 90 0");

              info_icon.setAttribute("visible",true);
              info_icon.setAttribute("rotation","0 135 0");
              info_icon.setAttribute("position", "0 1.75 2.5");
             

              close_icon.setAttribute("visible", false);



          }

          if (current == "#insideTQB") {

            console.log("insideTQB");
            arrow_forward.setAttribute("visible", false);
            arrow_right.setAttribute("visible", false);
            arrow_back.setAttribute("visible", true);
            arrow_left.setAttribute("visible", false);

            arrow_right.setAttribute("position", "2 4 2");
            arrow_back.setAttribute("position", "2 1 -1");
            arrow_back.setAttribute("animation","property:position;from: 2 1 -1 ; to: 2 1 -1; loop: true; dir: alternate; easing: linear")

            arrow_left.setAttribute("position", " 3 2 2 ");
            arrow_forward.setAttribute("position", "3 3 3");

            arrow_right.setAttribute("rotation", "");
            arrow_back.setAttribute("rotation", "-30 0 0");
            arrow_left.setAttribute("rotation", "");
            arrow_forward.setAttribute("rotation", "");
            info_icon.setAttribute("visible","false");


        }


        }); 

    }
});


// AFRAME.registerComponent('right-controller', {   //mouse-click controller 
//     dependencies:['raycaster'],
//     //at the beginning of the cycle :
//     init : function (){  
//         console.log("right-controller");

//         this.el.addEventListener("triggerdown", function(e) {
    
//             const sky =  document.getElementById("sky");

//             const arrow_right = document.getElementById("right");
//             const arrow_left = document.getElementById("left");
//             const arrow_forward = document.getElementById("forward");
//             const arrow_back = document.getElementById("back");
//             const info_icon = document.getElementById("infob");
//             const close_icon = document.getElementById("closeb");
       
   
//             const label2 = document.getElementById("Audio"); // Note the typo in ID ("lable2")
//             const label3 = document.getElementById("Map");
//             const label1 = document.getElementById("Language");
//             const container = document.getElementById("container");

//             const tab1  = document.getElementById("text1");
//             const tab2  = document.getElementById("text2");
//             const tab3  = document.getElementById("text3");
//             const tab4  = document.getElementById("text4");
//             const pic1 = document.getElementById("pic1");
//             const pic2 = document.getElementById("pic2");
//             const pic3 = document.getElementById("pic3");
//             const pic4 = document.getElementById("pic4");


           
          
//             /*-----------------------------------------------------------------------------------------------------*/

          

//             info_icon.addEventListener('triggerdown', function () {
//                 switch (current) {
//                     case "#parabol":
//                       console.log("parabol clicked");
//                         tab1.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
//                         pic1.setAttribute("visible", 'true');
//                         container.setAttribute("position","5 2.5 -5"); 
//                         close_icon.setAttribute("visible", "true");
//                         console.log('Text visibility set to true');
//                         flag = 1;
//                         break;
//                       case "#lake":
//                         tab2.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
//                         pic2.setAttribute("visible", 'true');
//                         container.setAttribute("position","5 2.5 -5"); 
//                         close_icon.setAttribute("visible", "true");
//                         console.log('Text visibility set to true');
//                         flag = 1;
//                         break;
//                       case "#TQB":
//                         tab3.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
//                         pic3.setAttribute("visible", 'true');
//                         container.setAttribute("position","5 2.5 -5"); 
//                         close_icon.setAttribute("visible", "true");
//                         console.log('Text visibility set to true');
//                         flag = 1;
//                         break;
//                       case "#insideTQB":
//                         tab4.setAttribute('visible', 'true'); // gan lien voi auto sound luon di dm!
//                         pic4.setAttribute("visible", 'true');
//                         container.setAttribute("position","5 2.5 -5"); 
//                         close_icon.setAttribute("visible", "true");
//                         console.log('Text visibility set to true');
//                         flag = 1;
//                         break;
    
//                    }
        
//              });

//             close_icon.addEventListener('triggerdown', function () {
//               switch (current) {
//                   case "#parabol":
//                       tab1.setAttribute('visible', 'false'); 
//                       pic1.setAttribute('visible', 'false'); 
//                       container.setAttribute("position", "-10000 2.5 -6"); 
//                       console.log("Flag value before checking:", flag);
//                       if (flag == 1) {
//                           console.log("close button visibility set to 0");
//                           close_icon.setAttribute("visible", "false");
//                           flag = 0;
//                       }
//                       break;
//                   case "#lake":
//                       tab2.setAttribute('visible', 'false'); 
//                       pic2.setAttribute('visible', 'false'); 
//                       container.setAttribute("position", "-10000 2.5 -6"); 
                    
//                       tab2.sound.autoplay = "true";
//                       if (flag == 1) {
//                           close_icon.setAttribute("visible", "false"); 
//                           flag = 0;
//                       }
//                       break;
//                   case "#TQB":
//                       tab3.setAttribute('visible', 'false'); 
//                       pic3.setAttribute('visible', 'false'); 
//                       container.setAttribute("position", "-10000 2.5 -6"); 
                    
//                       tab3.sound.autoplay = "true";
//                       if (flag == 1) {
//                           close_icon.setAttribute("visible", "false"); 
//                           flag = 0;
//                       }
//                       break;
//                   case "#insideTQB":
//                       tab4.setAttribute('visible', 'false'); 
//                       pic4.setAttribute('visible', 'false'); 
//                       container.setAttribute("position", "-10000 2.5 -6"); 
                    
//                       tab4.sound.autoplay = "true";
//                       if (flag == 1) {
//                           close_icon.setAttribute("visible", "false"); 
//                           flag = 0;
//                       }
//                       break;
//               }
//           });

            

//             /*---------------------------------------------------------------------------------------------*/
//             // let clickInProgress = false;
//             // [arrow_right, arrow_left, arrow_forward, arrow_back].forEach((arrow, index) => {
//             //     arrow.addEventListener('click', function (e) {
//             //       e.stopPropagation(); // Prevent event bubbling
//             //       if (clickInProgress) return;  // Prevent further clicks until transition is complete
//             //       clickInProgress = true; // Mark the click as in progress
//             //       console.log(`Arrow ${index} clicked`);
//             //       if (arrow.getAttribute('opacity') == 1 && arrow.getAttribute('visible') == true) {
//             //         switch (arrow) {
//             //           case arrow_right:
//             //             current = map_right.get(current);
//             //             break;
//             //           case arrow_left:
//             //             current = map_left.get(current);
//             //             break;
//             //           case arrow_forward:
//             //             current = map_forward.get(current);
//             //             break;
//             //           case arrow_back:
//             //             current = map_back.get(current);
//             //             break;
//             //         }
//             //         sky.setAttribute('src', current);
//             //         setTimeout(() => { 
//             //           clickInProgress = false;  // Reset flag after transition
//             //         }, 1000); // Adjust timeout based on your transition duration
//             //         console.log("Current arrow:", arrow, "Current state:", current, "Arrow visibility:", arrow.getAttribute("visible"));
//             //       }
//             //     });
//             //   });
//             if (arrow_forward.getAttribute('opacity') == 1 && arrow_forward.getAttribute('visible') == true){
//               current = map_forward.get(current);
//               sky.setAttribute('src', current);
//             }
//             if (arrow_back.getAttribute('opacity') == 1 && arrow_back.getAttribute('visible') == true){
//               current = map_back.get(current);
//               sky.setAttribute('src', current);
//             }
//             if (arrow_right.getAttribute('opacity') == 1 && arrow_right.getAttribute('visible') == true){
//               current = map_right.get(current);
//               sky.setAttribute('src', current);
//             }
//             if (arrow_left.getAttribute('opacity') == 1 && arrow_left.getAttribute('visible') == true){
//               current = map_left.get(current);
//               sky.setAttribute('src', current);
//             }

//             if (current == "#parabol" ) {
//                 console.log("parabol")
//                 arrow_forward.setAttribute("visible", true);
//                 arrow_right.setAttribute("visible", false);
//                 arrow_back.setAttribute("visible", false);
//                 arrow_left.setAttribute("visible", false);


//                 arrow_right.setAttribute("position", "2 4 2");
//                 arrow_back.setAttribute("position", "2 3 2");
//                 arrow_left.setAttribute("position", " 3 2 2 ");
//                 arrow_forward.setAttribute("position", "0 1 -1" );

                
//                 arrow_right.setAttribute("rotation", "");
//                 arrow_back.setAttribute("rotation", "");
//                 arrow_left.setAttribute("rotation", " ");
//                 arrow_forward.setAttribute("rotation", "0 0 180");

//             }
  
//             if(current == "#lake") {
//                 console.log("lake1");
//                 sky.setAttribute("rotation", "0 -150 0");
//                 arrow_forward.setAttribute("visible", "false");
//                 arrow_right.setAttribute("visible", "false");
//                 arrow_back.setAttribute("visible", "false");
//                 arrow_left.setAttribute("visible", "true");

//                 arrow_right.setAttribute("position", "2 4 2");
//                 arrow_back.setAttribute("position", "2 3 2");
//                 arrow_left.setAttribute("position", " 3 2 2 ");
//                 arrow_forward.setAttribute("position", "3 3 3");


//                 arrow_right.setAttribute("rotation", " 0 90 0");
//                 arrow_back.setAttribute("rotation", "0 90 0");
//                 arrow_left.setAttribute("rotation", "0 90 0");
//                 arrow_forward.setAttribute("rotation", "0 90 0");

//             }
//             if (current == "#intersect1") {
//                 console.log("i'm currently at :", current);
//                 arrow_forward.setAttribute("visible", "true");
//                 arrow_right.setAttribute("visible", "false");
//                 arrow_back.setAttribute("visible", "false");
//                 arrow_left.setAttribute("visible", "false");


//                 arrow_right.setAttribute("position", "2 4 2");
//                 arrow_back.setAttribute("position", "2 3 2");
//                 arrow_left.setAttribute("position", " 3 2 2 ");
//                 arrow_forward.setAttribute("position", "2.5 4 3");


//                 arrow_right.setAttribute("rotation", "");
//                 arrow_back.setAttribute("rotation", "");
//                 arrow_left.setAttribute("rotation", "");
//                 arrow_forward.setAttribute("rotation", "");

//                 info_icon.setAttribute("visible",false);

//             }

//             if (current == "#intersect2") {
//                 sky.setAttribute("rotation", "0 45 0");
//                 console.log("intersect2");
//                 arrow_forward.setAttribute("visible", true);
//                 arrow_right.setAttribute("visible", true);
//                 arrow_back.setAttribute("visible", false);
//                 arrow_left.setAttribute("visible", false);

//                 arrow_right.setAttribute("position", "2 4 2");
//                 arrow_back.setAttribute("position", "2 3 2");
//                 arrow_left.setAttribute("position", " 3 2 2 ");
//                 arrow_forward.setAttribute("position", "3 3 3");

//                 arrow_right.setAttribute("rotation", "");
//                 arrow_back.setAttribute("rotation", "");
//                 arrow_left.setAttribute("rotation", "");
//                 arrow_forward.setAttribute("rotation", "");

//                 info_icon.setAttribute("visible",false);

//             }

//             if (current == "#TQB") {
//               console.log("TQB");
//               arrow_forward.setAttribute("visible", false);
//               arrow_right.setAttribute("visible", true);
//               arrow_back.setAttribute("visible", true);
//               arrow_left.setAttribute("visible", false);

//               arrow_right.setAttribute("position", "2 4 2");
//               arrow_back.setAttribute("position", "2 3 2");
//               arrow_left.setAttribute("position", " 3 2 2 ");
//               arrow_forward.setAttribute("position", "3 3 3");

//               arrow_right.setAttribute("rotation", "");
//               arrow_back.setAttribute("rotation", "");
//               arrow_left.setAttribute("rotation", "");
//               arrow_forward.setAttribute("rotation", "");

//               info_icon.setAttribute("visible",true);

//           }

//           if (current == "#insideTQB") {
//             console.log("insideTQB");
//             arrow_forward.setAttribute("visible", false);
//             arrow_right.setAttribute("visible", false);
//             arrow_back.setAttribute("visible", true);
//             arrow_left.setAttribute("visible", false);

//             arrow_right.setAttribute("position", "2 4 2");
//             arrow_back.setAttribute("position", "2 3 2");
//             arrow_left.setAttribute("position", " 3 2 2 ");
//             arrow_forward.setAttribute("position", "3 3 3");

//             arrow_right.setAttribute("rotation", "");
//             arrow_back.setAttribute("rotation", "");
//             arrow_left.setAttribute("rotation", "");
//             arrow_forward.setAttribute("rotation", "");

//             info_icon.setAttribute("visible",true);

//         }


//         }); 
        
//     }
// });

AFRAME.registerComponent('play', {
    dependencies:['sound'],
    init: function(){
        let isPlaying = true;
        const tab1  = document.getElementById("text1");
        const tab2  = document.getElementById("text2");
        const tab3  = document.getElementById("text3");
        const tab4  = document.getElementById("text4");
        const label2 = document.getElementById("Audio");
        this.el.addEventListener('click', function(e){
           switch(current){
            case "#parabol" :
                if(isPlaying){
                    console.log("audio played");
                    tab1.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab1.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            case "#lake" :
                if(isPlaying){
                    console.log("audio played");
                    tab2.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab2.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            
           case "#TQB" :
                if(isPlaying){
                    console.log("audio played");
                    tab3.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab3.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
           case "#insideTQB" :
                if(isPlaying){
                    console.log("audio played");
                    tab4.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab4.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            
            
           }
        })



    }
});

AFRAME.registerComponent('play-vr', {
    dependencies:['sound'],
    init: function(){
        let isPlaying = true;
        const tab1  = document.getElementById("text1");
        const tab2  = document.getElementById("text2");
        const tab3  = document.getElementById("text3");
        const tab4  = document.getElementById("text4");
        const label2 = document.getElementById("Audio");
        this.el.addEventListener('triggerdown', function(e){
           switch(current){
            case "#parabol" :
                if(isPlaying){
                    console.log("audio played");
                    tab1.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab1.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            case "#lake" :
                if(isPlaying){
                    console.log("audio played");
                    tab2.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab2.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            
           case "#TQB" :
                if(isPlaying){
                    console.log("audio played");
                    tab3.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab3.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
           case "#insideTQB" :
                if(isPlaying){
                    console.log("audio played");
                    tab4.components.sound.playSound();
                    label2.setAttribute("value","Stop Audio");
                    isPlaying = false;

                }else{
                    console.log("stop audio");
                    tab4.components.sound.pauseSound();
                    label2.setAttribute("value","Play Audio");
                    isPlaying = true;
                    
                }
                break;
            
            
           }
        })



    }
});



