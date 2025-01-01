var flag = 0;




AFRAME.registerComponent('move-controller', {   //mouse-click controller 
    dependencies: ['raycaster'],
    //at the beginning of the cycle :
    init: function () {
        console.log("move-controller");
        const info_icon = document.getElementById("infob");

        const sky =  document.getElementById("sky");




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
      const language = document.getElementById("language_menu");
      const map_menu = document.getElementById("map_menu");
      const locations = document.querySelectorAll('[id^="location"]');
      const close_menub = document.getElementById("close_menu");




this.el.addEventListener("click", function (e) {
            label1.addEventListener('click', selectedLanguage);

            if (arrow_forward.getAttribute('opacity') == 1 && arrow_forward.getAttribute('visible') == true) {
                console.log("arrow forward clicked");
                current = map_forward.get(current);
                sky.setAttribute('src', current);
            }
            if (arrow_back.getAttribute('opacity') == 1 && arrow_back.getAttribute('visible') == true) {
                console.log("arrow back clicked");
                current = map_back.get(current);
                sky.setAttribute('src', current);
            }
            if (arrow_right.getAttribute('opacity') == 1 && arrow_right.getAttribute('visible') == true) {
                console.log("arrow right clicked");
                current = map_right.get(current);
                sky.setAttribute('src', current);
            }
            if (arrow_left.getAttribute('opacity') == 1 && arrow_left.getAttribute('visible') == true) {
                console.log("arrow left clicked");
                current = map_left.get(current);
                sky.setAttribute('src', current);
            }

            if (current == "#parabol") {

                // sky.setAttribute("rotation", "0 270 0");
                console.log("parabol")
                arrow_forward.setAttribute("visible", true);
                arrow_right.setAttribute("visible", false);
                arrow_back.setAttribute("visible", false);
                arrow_left.setAttribute("visible", false);
                arrow_back.setAttribute("position", "2 3 2");

                // arrow_forward.setAttribute("position", "0 1 2.5");

                arrow_forward.setAttribute("rotation", "0 0 0");

           

            }

            if (current == "#lake") {
                arrow_right.removeAttribute("animation");
                arrow_back.removeAttribute("animation");
                arrow_forward.removeAttribute("animation");
                arrow_left.removeAttribute("animation");

                console.log("lake1");
                // sky.setAttribute("rotation", "0 0 0");
                arrow_forward.setAttribute("visible", "false");
                arrow_right.setAttribute("visible", "false");
                arrow_back.setAttribute("visible", "false");
                arrow_left.setAttribute("visible", "true");

                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "2 3 2");
                arrow_left.setAttribute("position", " 1 1 -1.5 ");
                // arrow_left.setAttribute("animation", "property:position;from: 1 1 -1.5 ;to: 1 1 -1.5;loop:true;dir:alternate;easing: linear")


                arrow_forward.setAttribute("position", "3 3 3");


                arrow_right.setAttribute("rotation", " 0 90 0");
                arrow_back.setAttribute("rotation", "0 90 0");
                arrow_left.setAttribute("rotation", "90 90 0");
                arrow_forward.setAttribute("rotation", "0 90 0");


                info_icon.setAttribute("rotation", "0 -180 0");
                info_icon.setAttribute("visible", true);
                info_icon.setAttribute("position", "-2.75 1 -1.5");
                // info_icon.setAttribute("animation","property:position;from: -2.75 1 -1.5 ;to: -2.75 1.1 -1.5;loop:true;dir:alternate;easing: linear")
             

            }
            if (current == "#intersect1") {
                arrow_right.removeAttribute("animation");
                arrow_back.removeAttribute("animation");
                arrow_forward.removeAttribute("animation");
                arrow_left.removeAttribute("animation");

                sky.setAttribute("rotation", "0 75 0");
                console.log("i'm currently at :", current);
                arrow_forward.setAttribute("visible", "true");
                arrow_right.setAttribute("visible", "false");
                arrow_back.setAttribute("visible", "true");
                arrow_left.setAttribute("visible", "false");


                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "0.75 1 -4");
                // arrow_back.setAttribute("animation","property:position;from: 0.75 1 -4 ;to:0.75 1.2 -4;loop:true;dir:alternate;easing: linear")
                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "-0.5 1 3");
                // arrow_forward.setAttribute("animation","property:position;from: -0.5 1 3 ;to:-0.5 1.1 3;loop:true;dir:alternate;easing: linear")


                arrow_right.setAttribute("rotation", "");
                arrow_back.setAttribute("rotation", "0 1 -1");
                arrow_left.setAttribute("rotation", "");
                arrow_forward.setAttribute("rotation", "0 -5 0");

                info_icon.setAttribute("visible", "false");



            }
            if (current == "#intersect2") {
                arrow_right.removeAttribute("animation");
                arrow_back.removeAttribute("animation");
                arrow_forward.removeAttribute("animation");
                arrow_left.removeAttribute("animation");

                sky.setAttribute("rotation", "0 0 0");
                console.log("intersect2");
                arrow_forward.setAttribute("visible", true);
                arrow_right.setAttribute("visible", true);
                arrow_back.setAttribute("visible", true);
                arrow_left.setAttribute("visible", false);

                arrow_right.setAttribute("position", "-4 1 0.25");
                // arrow_right.setAttribute("animation","property:position;from: -4 1 0.25 ; to: -4 1.1 0.25; loop: true; dir: alternate; easing: linear")

                arrow_back.setAttribute("position", "-0.75 1 -4");
                // arrow_back.setAttribute("animation","property:position;from: -0.75 1 -4 ; to:-0.75 1.1 -4; loop: true; dir: alternate; easing: linear")

                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "2.25 1 4");
                // arrow_forward.setAttribute("animation","property:position;from: 2.25 1 4 ; to:2.25 1.2 4; loop: true; dir: alternate; easing: linear")

                arrow_right.setAttribute("rotation", "0 90 0");
                arrow_back.setAttribute("rotation", "0 0 0");

                arrow_forward.setAttribute("rotation", "45 -35 0");

                info_icon.setAttribute("visible", false);

            }

            if (current == "#TQB") {
                arrow_right.removeAttribute("animation");
                arrow_back.removeAttribute("animation");
                arrow_forward.removeAttribute("animation");
                arrow_left.removeAttribute("animation");

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

                info_icon.setAttribute("visible", true);
                info_icon.setAttribute("position", "0 1.75 2.5");
                
               



            }

            if (current == "#insideTQB") {
                arrow_right.removeAttribute("animation");
                arrow_back.removeAttribute("animation");
                arrow_forward.removeAttribute("animation");
                arrow_left.removeAttribute("animation");

                console.log("insideTQB");
                arrow_forward.setAttribute("visible", false);
                arrow_right.setAttribute("visible", false);
                arrow_back.setAttribute("visible", true);
                arrow_left.setAttribute("visible", false);

                arrow_right.setAttribute("position", "2 4 2");
                arrow_back.setAttribute("position", "2 1 -1");
               

                arrow_left.setAttribute("position", " 3 2 2 ");
                arrow_forward.setAttribute("position", "3 3 3");

                arrow_right.setAttribute("rotation", "");
                arrow_back.setAttribute("rotation", "-30 0 0");
                arrow_left.setAttribute("rotation", "");
                arrow_forward.setAttribute("rotation", "");


            }

        });

    }
});

AFRAME.registerComponent('play', {
    dependencies: ['sound'],
   
    init: function () {
        let isPlaying = true;
        const info_icon = document.getElementById("infob");
        const tab1 = document.getElementById("text1");
        const tab2 = document.getElementById("text2");
        const tab3 = document.getElementById("text3");
        const tab4 = document.getElementById("text4");
        const label2 = document.getElementById("Audio");
        this.el.addEventListener('click', function (e) {
            console.log("play intersected");
            switch (current) {
                case "#parabol":
                    if (isPlaying) {

                        console.log("audio played");
                        tab1.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab1.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;
                case "#lake":
                    if (isPlaying) {
                        console.log("audio played");
                        tab2.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab2.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;

                case "#TQB":
                    if (isPlaying) {
                        console.log("audio played");
                        tab3.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab3.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;
                case "#insideTQB":
                    if (isPlaying) {
                        console.log("audio played");
                        tab4.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab4.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;


            }

        })



    }
});

AFRAME.registerComponent('play-vr', {
    dependencies: ['sound'],
    init: function () {
        let isPlaying = true;
        const tab1 = document.getElementById("text1");
        const tab2 = document.getElementById("text2");
        const tab3 = document.getElementById("text3");
        const tab4 = document.getElementById("text4");
        const label2 = document.getElementById("Audio");
        this.el.addEventListener('triggerdown', function (e) {
            switch (current) {
                case "#parabol":
                    if (isPlaying) {
                        console.log("audio played");
                        tab1.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab1.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;
                case "#lake":
                    if (isPlaying) {
                        console.log("audio played");
                        tab2.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab2.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;

                case "#TQB":
                    if (isPlaying) {
                        console.log("audio played");
                        tab3.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab3.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;
                case "#insideTQB":
                    if (isPlaying) {
                        console.log("audio played");
                        tab4.components.sound.playSound();
                        label2.setAttribute("value", "Stop Audio");
                        isPlaying = false;

                    } else {
                        console.log("stop audio");
                        tab4.components.sound.pauseSound();
                        label2.setAttribute("value", "Play Audio");
                        isPlaying = true;

                    }
                    break;


            }
        })



    }
});

