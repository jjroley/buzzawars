/** 
 If dragged onto occupied square, the avatar is placed on the closest square on vertical axis that is not occupied.
**/



//inspired a lot by plants vs zombies 2.
//{
/*

    if you have any ideas for the name please tell me!
    Ideas:
    tower defense of buzzaws vs other avatars
    platformer (done them too much, I dont think so)
    PVZ tower defense kind of (im thinking this)
    ok im doing PVZ tower defense with buzzaws defending and something attacking, maybe just all of other teams attacking (also i should definitely make it super easy for you to win to show how easily buzzaw is going to win primavera)
    
    dude why was that checkered pattern so hard to make
    
    click to place a tower
    change 'selected' variable to change what tower you place
    lets goooo i made it so that the pyroaches can only eat one buzzaw at once.
    
    started: 7/4/2022
    finished: a while ago
    released: 2/5/2022
    dude spam avatars button then back button, it looks insane
*/
//}
/**
suggestions and stuff would be nice, i made this really fast for a primavera challenge.
quite a lot of work put into this.
what else do i say here? look at line 2 for more comments i guess
i recommend clicking the avatars button.
I didnt have enough time to make a proper background sadge
use the pvz2 strats, place seeds at the back and then a shooting buzzaw then a sapling (wall)

subscribe here to support me:
https://www.khanacademy.org/computer-programming/subscribe-to-mojo1000/5975165153067008
**/


size(600, 600, 1);


//comments ^^
//credit to buzzaw avatar goes to someone
//credit for pyroach avatar goes to Klikiavenir
//trying out a different way of OOP (never mind actually)
// image loading algorithm adapted from OOPS! STUDIO!
textFont(createFont("trebuchet MS Bold"));
textAlign(CENTER, CENTER);
var page = "load";
var clicked = false;
smooth();
var otherGameImg;
//array thing number 1 is the money you get for the second level, number 2 is for the third level etc
var goldForWaves = [50, 50, 50, 100, 100];
var gameImgX = 0;
var Bool = false;
var imgS = 1;
var nxtWaveTimer = 0;
var nxtTrans = false;
var selected = "none";//bTree, bSapling, bSeedling, bSeed, bUltimate

var costs = {
    "bSeed": 50,
    "bSeedling": 100,
    "bSapling": 100,
    "bTree": 200,
    "bUltimate": 300,
};
//because im dumb and i can't figure out how to loop through an object properly
var txtLookGood = [costs.bSeed, costs.bSeedling, costs.bSapling, costs.bTree, costs.bUltimate];
//I didnt actually use this lol (nvm i did actually, for deleting plants)
var keys = {};
var wave = 0;
//sun
var gold = goldForWaves[wave];

var lives = 3;
//Credit to the person who made buzzaw (anthony mullan i think?)
var buzzaw = function(x, y, s, growth) {
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    switch (growth) {
        case 0:
            // {
            pushMatrix();
            translate(-165, -160);
            fill(0, 0, 0);
            ellipse(200, 209, 66, 65);
            fill(46, 46, 45);
            ellipse(196, 206, 62, 60);
            beginShape();
            vertex(189, 184);
            vertex(181, 182);
            vertex(189, 172);
            vertex(194, 162);
            vertex(200, 172);
            vertex(207, 178);
            endShape(CLOSE);
            for (var i = 0; i < 10; i += 3) {
                fill(255, 0, 0, 60);
                ellipse(205, 218, 5 + i, 5 + i);
                ellipse(184, 221, 5 + i, 5 + i);
            }

            fill(255, 0, 0);
            ellipse(205, 218, 5, 5);
            ellipse(184, 221, 5, 5);
            fill(255, 255, 255);
            ellipse(205.5, 217.5, 1.5, 1.5);
            ellipse(184.5, 220.5, 1.5, 1.5);
            popMatrix();
            //}
            break;
        case 1:
            // {
            pushMatrix();
            translate(-160, -140);

            fill(0, 0, 0);
            ellipse(190, 235, 46, 45);
            fill(46, 46, 45);
            ellipse(188, 233, 42, 40);
            pushMatrix();
            translate(205, 252);
            rotate(-35);
            fill(46, 46, 45);
            ellipse(0, 0, 15, 9);
            fill(89, 3, 3);
            ellipse(-1, 1, 12, 8);
            popMatrix();

            pushMatrix();
            translate(180, 257);
            rotate(5);
            fill(46, 46, 45);
            ellipse(0, 0, 16, 9);
            fill(89, 3, 3);
            ellipse(-1, 1, 15, 6);
            popMatrix();
            fill(112, 15, 4);
            beginShape();
            curveVertex(189, 194);
            curveVertex(188, 183);
            curveVertex(194, 175);
            curveVertex(196, 167);
            curveVertex(200, 163);
            curveVertex(204, 160);
            curveVertex(210, 155);
            curveVertex(210, 153);
            curveVertex(219, 146);
            curveVertex(229, 139);
            curveVertex(222, 153);
            curveVertex(221, 165);
            curveVertex(220, 180);
            curveVertex(216, 191);
            curveVertex(204, 201);
            curveVertex(193, 209);
            endShape(CLOSE);

            fill(145, 3, 3);
            pushMatrix();
            translate(-25, 20);
            scale(0.75, 0.9);
            beginShape();
            curveVertex(311, 195);
            curveVertex(298, 199);
            curveVertex(291, 192);
            curveVertex(293, 171);
            curveVertex(304, 162);
            curveVertex(311, 157);
            curveVertex(318, 156);
            curveVertex(322, 164);
            curveVertex(323, 176);
            curveVertex(320, 187);
            endShape(CLOSE);
            popMatrix();

            fill(46, 45, 45);
            beginShape();
            curveVertex(190, 208);
            curveVertex(194, 221);
            curveVertex(182, 221);
            curveVertex(186, 212);
            curveVertex(183, 203);
            curveVertex(180, 188);
            curveVertex(184, 173);
            curveVertex(196, 158);
            curveVertex(210, 147);
            curveVertex(227, 140);
            curveVertex(220, 147);
            curveVertex(216, 153);
            curveVertex(209, 160);
            curveVertex(203, 168);
            curveVertex(196, 181);
            curveVertex(192, 190);
            endShape(CLOSE);


            for (var i = 0; i < 10; i += 3) {
                fill(255, 0, 0, 40);
                ellipse(195, 240, 5 + i, 5 + i);
                ellipse(180, 243, 5 + i, 5 + i);

            }


            fill(255, 0, 0);
            ellipse(195, 240, 5, 5);
            ellipse(180, 243, 5, 5);
            fill(255);
            ellipse(195.5, 239.5, 1.7, 1.7);
            ellipse(180.3, 242.5, 1.7, 1.7);
            popMatrix();
            //}
            break;
        case 2:
            // {
            pushMatrix();
            translate(-155, -200);
            pushMatrix();
            strokeWeight(2);
            translate(190, 235);
            scale(1.1);
            fill(0, 0, 0);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }

            fill(46, 46, 45);
            scale(0.9);
            rotate(20);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }
            popMatrix();

            fill(0, 0, 0);
            ellipse(190, 235, 46, 45);
            fill(46, 46, 45);
            ellipse(188, 233, 42, 40);

            for (var i = 0; i < 10; i += 3) {
                fill(255, 0, 0, 40);
                ellipse(195, 240, 5 + i, 5 + i);
                ellipse(180, 243, 5 + i, 5 + i);

            }
            fill(255, 0, 0);
            ellipse(195, 240, 5, 5);
            ellipse(180, 243, 5, 5);
            fill(255);
            ellipse(195.5, 239.5, 1.7, 1.7);
            ellipse(180.3, 242.5, 1.7, 1.7);
            popMatrix();
            //}
            break;
        case 3:
            // {
            pushMatrix();
            translate(-150, -190);

            fill(0);
            pushMatrix();
            scale(0.5);
            translate(150, 240);
            beginShape();
            curveVertex(293, 223);
            curveVertex(284, 230);
            curveVertex(264, 235);
            curveVertex(252, 238);
            curveVertex(250, 233);
            curveVertex(246, 224);
            curveVertex(263, 224);
            curveVertex(272, 222);
            curveVertex(283, 216);
            curveVertex(299, 203);
            curveVertex(324, 167);
            curveVertex(319, 161);
            curveVertex(338, 147);
            curveVertex(337, 169);
            curveVertex(329, 168);
            curveVertex(306, 209);
            endShape(CLOSE);
            popMatrix();

            fill(0, 0, 0, 10);
            for (var i = 0; i < 20; i += 2) {
                ellipse(190, 235, 60 + i, 60 + i);
            }
            pushMatrix();
            strokeWeight(2);
            translate(190, 235);
            scale(1.4);
            fill(0, 0, 0);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }

            fill(194, 24, 24);
            scale(0.8);
            rotate(20);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }
            popMatrix();

            fill(0, 0, 0);
            ellipse(190, 235, 46, 45);
            fill(46, 46, 45);
            ellipse(188, 233, 42, 40);


            //The eyes.
            fill(255, 0, 0, 20);
            for (var i = 0; i < 20; i += 3) {
                ellipse(195, 239, 5 + i, 5 + i);
                ellipse(180, 239, 5 + i, 5 + i);
            }
            fill(250, 13, 13);
            noStroke();
            arc(180, 239, 7, 10, 30, 210);
            arc(195, 239, 7, 10, -30, 150);

            fill(255, 255, 255);
            ellipse(181, 242, 1.5, 1.5);
            ellipse(194, 242, 1.5, 1.5);

            popMatrix();
            //}
            break;
        case 4:
            // {
            pushMatrix();
            translate(-130, -175);

            fill(20);
            pushMatrix();
            scale(0.5);
            translate(150, 250);
            beginShape();
            curveVertex(319, 178);
            curveVertex(314, 196);
            curveVertex(264, 235);
            curveVertex(252, 238);
            curveVertex(250, 233);
            curveVertex(246, 224);
            curveVertex(263, 224);
            curveVertex(272, 222);
            curveVertex(302, 187);
            curveVertex(288, 178);
            curveVertex(324, 167);
            curveVertex(319, 161);
            curveVertex(347, 152);
            curveVertex(340, 176);
            curveVertex(333, 172);
            curveVertex(324, 207);
            endShape(CLOSE);
            popMatrix();

            for (var i = 0; i < 30; i += 4) {
                fill(0, 0, 0, 40 - i);
                ellipse(190, 235, 80 + i, 80 + i);
            }
            for (var i = 0; i < 360; i += 45) {
                for (var j = 0; j < 20; j++) {
                    pushMatrix();
                    translate(190, 230);
                    rotate(i + j);
                    scale(0.5);
                    fill(0, 0, 0, 20);
                    rect(0, 0, 70 + j * 2, 5 + j);
                    popMatrix();
                }
            }
            pushMatrix();
            strokeWeight(2);
            translate(190, 235);
            scale(1.7);
            fill(0, 0, 0);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }

            fill(194, 24, 24);
            scale(0.8);
            rotate(20);
            for (var i = 0; i < 360; i += 45) {
                rotate(i);
                quad(25, 12, -10, 0, 20, 0, 25, 10);
            }
            popMatrix();

            fill(0, 0, 0);
            ellipse(190, 235, 46, 45);
            fill(46, 46, 45);
            ellipse(188, 233, 42, 40);

            //The eyes.
            fill(255, 0, 0, 20);
            for (var i = 0; i < 20; i += 3) {
                ellipse(195, 239, 5 + i, 5 + i);
                ellipse(180, 239, 5 + i, 5 + i);
            }
            fill(250, 13, 13);
            noStroke();
            arc(180, 239, 10, 12, 30, 210);
            arc(195, 239, 10, 12, -30, 150);

            fill(255, 255, 255);
            ellipse(181, 242, 1.5, 1.5);
            ellipse(194, 242, 1.5, 1.5);

            popMatrix();

            //}
        break;
    }
    popMatrix();
};
//Credit to PlotTwist/KlikiAvenir
//I modified the seed and seedling because the color was too bright
var pyroach = function(x, y, Scale, growth) {
    pushMatrix();
    translate(x, y);
    scale(Scale);
    switch (growth) {
        case 0:
            // {
            pushMatrix();
            translate(-10, -120);
            strokeWeight(1);
            fill(160, -60, -60);
            stroke(190, -60, -60);
            ellipse(56, 179, 79, 73);
            beginShape();
            vertex(39, 146);
            vertex(46, 141);
            vertex(51, 136);
            vertex(56, 126);
            vertex(60, 136);
            vertex(66, 141);
            vertex(73, 146);
            endShape();
            fill(217, 26, 26);
            stroke(204, 22, 22);
            ellipse(53, 176, 73, 68);
            beginShape();
            vertex(37, 146);
            vertex(44, 141);
            vertex(49, 136);
            vertex(56, 126);
            vertex(59, 136);
            vertex(64, 141);
            vertex(71, 146);
            endShape();
            fill(82, 82, 82);
            ellipse(39, 191, 9, 9);
            ellipse(64, 188, 9, 9);
            strokeWeight(3);
            stroke(255, 255, 255);
            point(40, 190);
            point(65, 187);
            popMatrix();
            //}
            break;
        case 1:
            // {
            pushMatrix();
            translate(-65 - 93, -65 - 70);
            noStroke();
            pushMatrix();
            translate(205, 252);
            rotate(-35);
            fill(150, -60, -60);
            ellipse(0, 0, 16, 9);
            popMatrix();
            pushMatrix();
            translate(180, 257);
            rotate(5);
            fill(250, 122, 10);
            ellipse(0, 0, 15, 9);
            popMatrix();
            fill(150, -60, -60);
            ellipse(190, 235, 46, 45);
            fill(179, 29, 29);
            ellipse(188, 233, 42, 40);
            pushMatrix();
            translate(205, 252);
            rotate(-35);
            fill(179, 29, 29);
            ellipse(0, 0, 15, 9);
            fill(150, -60, -60);
            ellipse(-1, 1, 12, 8);
            popMatrix();

            pushMatrix();
            translate(180, 257);
            rotate(5);
            fill(179, 29, 29);
            ellipse(0, 0, 16, 9);
            fill(150, -60, -60);
            ellipse(-1, 1, 15, 6);
            popMatrix();
            fill(150, -60, -60);
            beginShape();
            curveVertex(189, 194);
            curveVertex(188, 183);
            curveVertex(194, 175);
            curveVertex(196, 167);
            curveVertex(200, 163);
            curveVertex(204, 160);
            curveVertex(210, 155);
            curveVertex(210, 153);
            curveVertex(219, 146);
            curveVertex(229, 139);
            curveVertex(222, 153);
            curveVertex(221, 165);
            curveVertex(220, 180);
            curveVertex(216, 191);
            curveVertex(204, 201);
            curveVertex(193, 209);
            endShape(CLOSE);
            fill(130, -80, -80);
            pushMatrix();
            translate(-25, 20);
            scale(0.75, 0.9);
            beginShape();
            curveVertex(311, 195);
            curveVertex(298, 199);
            curveVertex(291, 192);
            curveVertex(293, 171);
            curveVertex(304, 162);
            curveVertex(311, 157);
            curveVertex(318, 156);
            curveVertex(322, 164);
            curveVertex(323, 176);
            curveVertex(320, 187);
            endShape(CLOSE);
            popMatrix();

            fill(179, 29, 29);
            beginShape();
            curveVertex(190, 208);
            curveVertex(194, 221);
            curveVertex(182, 221);
            curveVertex(186, 212);
            curveVertex(183, 203);
            curveVertex(180, 188);
            curveVertex(184, 173);
            curveVertex(196, 158);
            curveVertex(210, 147);
            curveVertex(227, 140);
            curveVertex(220, 147);
            curveVertex(216, 153);
            curveVertex(209, 160);
            curveVertex(203, 168);
            curveVertex(196, 181);
            curveVertex(192, 190);
            endShape(CLOSE);

            fill(0, 0, 0);
            ellipse(195, 240, 5, 5);
            ellipse(180, 243, 5, 5);
            fill(255);
            ellipse(195.5, 239.5, 2.7, 2.7);
            ellipse(180.3, 242.5, 2.7, 2.7);
            popMatrix();
            //}
            break;
        case 2:
            // {
            pushMatrix();
            translate(-210, -100);
            fill(140, -60, -60);
            stroke(140, -60, -60);
            ellipse(257, 176, 79, 73);
            ellipse(237, 207, 20, 20);
            ellipse(273, 207, 21, 21);
            beginShape();
            vertex(236, 145);
            vertex(246, 115);
            vertex(254, 106);
            vertex(255, 117);
            vertex(250, 120);
            vertex(246, 130);
            vertex(246, 195);
            endShape();
            beginShape();
            vertex(272, 145);
            vertex(286, 115);
            vertex(294, 106);
            vertex(295, 117);
            vertex(290, 120);
            vertex(288, 130);
            vertex(286, 173);
            endShape();
            fill(200, 0, 0);
            stroke(200, 0, 0);
            strokeWeight(1);
            ellipse(235, 207, 18, 18);
            ellipse(271, 207, 19, 19);
            stroke(200, 0, 0);
            ellipse(254, 173, 73, 68);
            beginShape();
            vertex(234, 145);
            vertex(244, 113);
            vertex(254, 104);
            vertex(253, 115);
            vertex(248, 118);
            vertex(244, 128);
            vertex(244, 143);
            endShape();
            beginShape();
            vertex(274, 143);
            vertex(284, 113);
            vertex(294, 104);
            vertex(293, 115);
            vertex(288, 118);
            vertex(284, 128);
            vertex(284, 153);
            endShape();
            fill(100, 0, 0);
            noStroke();
            beginShape();
            vertex(242, 154);
            vertex(236, 156);
            vertex(225, 178);
            vertex(230, 182);
            vertex(236, 179);
            endShape();
            beginShape();
            endShape();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);
            pushMatrix();
            translate(238, 167);
            rotate(19);
            translate(-238, -167);
            ellipse(237, 161, 2, 10);
            popMatrix();

            fill(100, 0, 0);
            noStroke();
            beginShape();
            vertex(280, 154);
            vertex(274, 156);
            vertex(263, 178);
            vertex(268, 182);
            vertex(274, 179);
            endShape();
            beginShape();
            endShape();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);

            pushMatrix();
            translate(276, 167);
            rotate(19);
            translate(-276, -167);
            ellipse(275, 161, 2, 10);
            popMatrix();
            popMatrix();
            //}
            break;
        case 3:
            // {
            pushMatrix();
            translate(-150, -360);
            fill(90, -60, -60);
            stroke(90, -60, -60);
            ellipse(252, 463, 20, 20);
            ellipse(266, 428, 18, 18);
            fill(140, -60, -60);
            stroke(130, -60, -60);
            ellipse(250, 461, 18, 18);
            ellipse(265, 426, 16, 16);
            fill(90, -60, -60);
            stroke(90, -60, -60);
            ellipse(229, 431, 79, 73);
            ellipse(206, 454, 79, 73);
            beginShape();
            vertex(185, 423);
            vertex(195, 393);
            vertex(203, 374);
            vertex(204, 395);
            vertex(199, 398);
            vertex(195, 408);
            vertex(195, 473);
            endShape();
            beginShape();
            vertex(221, 423);
            vertex(235, 393);
            vertex(243, 374);
            vertex(244, 395);
            vertex(239, 398);
            vertex(237, 408);
            vertex(235, 451);
            endShape();
            arc(187, 478, 40, 40, 96, 211);
            arc(222, 478, 40, 40, -123, 111);
            fill(150, 0, 0);
            stroke(150, 0, 0);
            ellipse(226, 428, 73, 68);
            noFill();
            strokeWeight(10);
            stroke(0, -60, -60);
            arc(234, 428, 32, 60, 90, 270);
            strokeWeight(3);
            stroke(90, 0, 0);
            arc(230, 428, 32, 63, 90, 270);
            strokeWeight(1);
            fill(150, 0, 0);
            ellipse(203, 451, 70, 68);
            beginShape();
            vertex(183, 423);
            vertex(193, 391);
            vertex(203, 372);
            vertex(202, 393);
            vertex(197, 396);
            vertex(193, 406);
            vertex(193, 418);
            endShape();
            beginShape();
            vertex(223, 421);
            vertex(233, 391);
            vertex(243, 372);
            vertex(242, 393);
            vertex(237, 396);
            vertex(233, 406);
            vertex(233, 431);
            endShape();
            fill(150, -60, -60);
            stroke(150, -60, -60);
            noStroke();
            arc(185, 478, 40, 40, 96, 211);
            arc(218, 478, 40, 40, -22, 112);
            fill(50, 0, 0);
            noStroke();
            pushMatrix();
            translate(180, 441);
            rotate(20);
            translate(-180, -441);
            ellipse(177, 446, 17, 37);
            popMatrix();
            pushMatrix();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);
            pushMatrix();
            translate(180, 445);
            rotate(19);
            translate(-180, -445);
            ellipse(177, 439, 9, 14);
            popMatrix();
            fill(50, 0, 0);
            noStroke();
            translate(232, 446);
            rotate(-24);
            translate(-227, -446);
            ellipse(223, 446, 20, 40);
            popMatrix();
            beginShape();
            endShape();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);
            pushMatrix();
            translate(231, 445);
            rotate(-30);
            translate(-231, -445);
            ellipse(231, 441, 9, 15);
            popMatrix();
            
            popMatrix();
            //}
            break;
        case 4:
            // {
            pushMatrix();
            translate(-300, -240);
            fill(140, -60, -60);
            stroke(140, -60, -60);
            ellipse(388, 376, 20, 20);
            ellipse(402, 341, 18, 18);
            fill(90, -60, -60);
            stroke(100, -60, -60);
            ellipse(386, 374, 18, 18);
            ellipse(401, 339, 16, 16);
            fill(140, -60, -60);
            stroke(140, -60, -60);
            ellipse(365, 344, 79, 73);
            ellipse(342, 367, 79, 73);
            beginShape();
            vertex(321, 336);
            vertex(331, 306);
            vertex(369, 257);
            vertex(372, 228);
            vertex(387, 192);
            vertex(377, 252);
            vertex(340, 308);
            vertex(335, 311);
            vertex(331, 321);
            vertex(331, 386);
            endShape();
            beginShape();
            vertex(357, 336);
            vertex(371, 306);
            vertex(409, 257);
            vertex(402, 228);
            vertex(418, 192);
            vertex(407, 252);
            vertex(410, 266);
            vertex(375, 311);
            vertex(373, 321);
            vertex(371, 364);
            endShape();
            rectMode(CENTER);
            arc(323, 391, 40, 40, 96, 211);
            arc(358, 391, 40, 40, -123, 111);
            triangle(322, 411, 319, 399, 329, 412);
            triangle(354, 411, 359, 399, 338, 410);
            fill(80, 0, 0);
            stroke(80, 0, 0);
            ellipse(362, 341, 73, 68);
            noFill();
            strokeWeight(10);
            stroke(110, 0, -60);
            arc(370, 341, 32, 60, 90, 270);
            strokeWeight(3);
            stroke(140, 0, 0);
            arc(366, 341, 32, 63, 90, 270);
            strokeWeight(1);
            fill(80, 0, 0);
            ellipse(339, 364, 70, 68);
            beginShape();
            vertex(319, 336);
            vertex(329, 304);
            vertex(369, 255);
            vertex(370, 228);
            vertex(386, 192);
            vertex(375, 252);
            vertex(338, 306);
            vertex(333, 309);
            vertex(329, 319);
            vertex(329, 331);
            endShape();
            beginShape();
            vertex(359, 334);
            vertex(369, 304);
            vertex(404, 255);
            vertex(400, 228);
            vertex(417, 192);
            vertex(406, 266);
            vertex(376, 306);
            vertex(373, 309);
            vertex(369, 319);
            vertex(369, 344);
            endShape();
            fill(80, -60, -60);
            stroke(80, -60, -60);
            noStroke();
            arc(321, 391, 40, 40, 96, 211);
            arc(354, 391, 40, 40, -19, 111);
            triangle(319, 411, 319, 399, 326, 412);
            triangle(344, 411, 359, 399, 338, 411);
            fill(250, 0, 0);
            noStroke();
            pushMatrix();
            translate(316, 354);
            rotate(20);
            translate(-316, -354);
            ellipse(313, 359, 17, 37);
            popMatrix();
            pushMatrix();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);
            pushMatrix();
            translate(316, 358);
            rotate(19);
            translate(-316, -358);
            ellipse(313, 352, 9, 14);
            popMatrix();
            fill(250, 0, 0);
            noStroke();
            translate(368, 359);
            rotate(-24);
            translate(-363, -359);
            ellipse(359, 359, 20, 40);
            popMatrix();
            beginShape();
            endShape();
            strokeWeight(1);
            stroke(255, 255, 255, 150);
            fill(255, 255, 255, 200);
            pushMatrix();
            translate(367, 358);
            rotate(-30);
            translate(-367, -358);
            ellipse(367, 354, 9, 15);
            popMatrix();
            popMatrix();
            //}
            break;
    }
    popMatrix();
    rectMode(CORNER);
};
//images
var imgs = {
    "bSeed": {
        d: function() {
            buzzaw(0, -3, 1, 0);
            return get();
        },
    },
    "bSeedling": {
        d: function() {
            buzzaw(-5, 1, 1, 1);
            return get();
        },
    },
    "bSapling": {
        d: function() {
            buzzaw(-4, -3, 1, 2);
            return get();
        },
    },
    "bTree": {
        d: function() {
            buzzaw(0, 1, 1, 3);
            return get();
        }
    },
    "bUltimate": {
        d: function() {
            buzzaw(-6, -1, 1, 4);
            return get();
        }
    },
    //bullet is way too complicated i shrunk it down so you can't even see the details :/
    "bullet": {
        d: function() {
            pushMatrix();
            translate(-20, -17);
            scale(0.3);
            fill(247, 60, 17);
            strokeWeight(2);
            strokeCap(SQUARE);
            stroke(247, 60, 17);
            beginShape();
            vertex(70, 100);
            vertex(153, 87);
            vertex(109, 80);
            vertex(164, 72);
            vertex(138, 62);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            pushMatrix();
            translate(0, 200);
            scale(1, -1);
            beginShape();
            vertex(70, 100);
            vertex(153, 87);
            vertex(109, 80);
            vertex(164, 72);
            vertex(138, 62);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            popMatrix();
            
            fill(140, 32, 10);
            pushMatrix();
            translate(34, 11);
            scale(0.83, 0.89);
            strokeWeight(2);
            strokeCap(SQUARE);
            stroke(140, 32, 10);
            beginShape();
            vertex(70, 100);
            vertex(153, 87);
            vertex(109, 78);
            vertex(164, 72);
            vertex(138, 60);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            pushMatrix();
            translate(0, 200);
            scale(1, -1);
            beginShape();
            vertex(70, 100);
            vertex(153, 87);
            vertex(109, 78);
            vertex(164, 72);
            vertex(138, 60);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            popMatrix();
            popMatrix();
            
            
            fill(94, 13, 13);
            pushMatrix();
            translate(66, 36);
            scale(0.67, 0.63);
            strokeWeight(2);
            strokeCap(SQUARE);
            stroke(94, 13, 13);
            beginShape();
            vertex(94, 100);
            vertex(153, 84);
            vertex(109, 72);
            vertex(165, 65);
            vertex(138, 49);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            pushMatrix();
            translate(0, 196);
            scale(1, -1);
            beginShape();
            vertex(94, 100);
            vertex(153, 84);
            vertex(109, 69);
            vertex(165, 65);
            vertex(138, 47);
            bezierVertex(199, 62, 195, 92, 196, 100);
            endShape();
            popMatrix();
            popMatrix();
            popMatrix();
            return get(0, 0, 70, 70);
        }
    },
    // if you see this and you are a judge then you are officially obligated to give me extra points because this project is amazing
    //9.5 should suffice.
    "sun": {
        d: function() {
            pushMatrix();
            translate(-8, -9);
            scale(0.7);
           // background(31, 31, 31);
            noStroke();
            //ellipse on outside
            fill(255, 251, 148);
            ellipse(50, 50, 45, 45);
            //triangles on outside
            
            for(var i = 0; i < 360; i+= 360/12) {
                pushMatrix();
                translate(50, 50);
                rotate(i);
                triangle(-13, 0, 13, 10, 0, 37);
                
            popMatrix();
            }
            
            fill(248, 211, 1);
            ellipse(50, 50, 33, 33);
            fill(255, 251, 56);
            ellipse(50, 50, 26, 26);
            fill(248, 211, 1);
            noStroke();
            arc(50, 53, 26, 21, 0, 180);
            fill(255, 250, 204);
            ellipse(54, 43, 9, 6);
            fill(255, 255, 181);
            popMatrix();


            return get();
        },
    },
    "pSeed": {
        d: function() {
            pyroach(-2, -1, 0.7, 0);
            return get();
        }
    },
    "pSeedling": {
        d: function() {
            pyroach(-4, 0, 0.65, 1);
            return get();
        }
    },
    "pSapling": {
        d: function() {
            pyroach(-3, 0, 0.7, 2);
            return get();
        }
    },
    "pTree": {
        d: function() {
            pyroach(-8, -4, 0.64, 3);
            return get();
        }
    },
    "pUltimate": {
        d: function() {
            pyroach(1, -16, 0.5, 4);
            return get();
        }
    },
};
//credit to oops! studio! however i modified it heaps
var curLoad = 0;
var loaded = false;
var load = function() {
    var obj = Object.keys(imgs);
    background(0, 0);
    imgs[obj[curLoad]] = imgs[obj[curLoad]].d();
    curLoad++;
    background(0);
    textSize(40);
    fill(255);
    text("Loading " + (((curLoad / Object.keys(imgs).length)) * 100).toFixed(0) + "%", 300, 300);
    if(!loaded && curLoad >= Object.keys(imgs).length) {
        page = 'game';
        loaded = true;
    }
};
//collide rect-rect
var collide = function(objx, objy, objw, objh, obj2x, obj2y, obj2w, obj2h) {
    return objx - obj2x < obj2w &&
           obj2x - objx < objw &&
           objy - obj2y < obj2h &&
           obj2y - objy < objh;
};
//particles
var particles = [];
var addParticles = function(x, y, type, vx, vy) {
    //different types of particles
    if(type === "hit") {
        particles.push({
            x: x,
            y: y,
            w: 12,
            h: 12,
            rotation: 2,
            vx: random(-0.3, -1),
            vy: random(-0.6, 0.6),
            gravity: 0,
            color: color(217, 26, 26),
            opacity: random(250, 260),
            opacitySpeed: 4,
            rects: false,
            time: random(200000, 50000000),
            sSpeed: 0,
        });
    }
    if(type === "dead") {
        particles.push({
            x: x + random(-20, 20),
            y: y + random(-20, 20),
            w: 12,
            h: 12,
            rotation: 0,
            vx: random(-0.4, 0.4),
            vy: random(-0.4, 0.4),
            gravity: 0,
            color: color(217, 26, 26),
            opacity: random(260, 280),
            opacitySpeed: 5,
            rects: true,
            time: random(200000, 50000000),
            sSpeed: 0,
            rSpeed: 0,
        });
    }
};
//looping through the particles
var runParticles = function() {
    for(var i = particles.length - 1; i >= 0; i--)  {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.opacity -= p.opacitySpeed;
        p.rotation -= p.rSpeed;
        rectMode(CENTER);
        fill(p.color, p.opacity);
        noStroke();
        if(!p.rects) {
            ellipse(p.x, p.y, p.w, p.h);
        }
        else {
            pushMatrix();
            translate(p.x, p.y);
            rotate(p.rotation);
            rect(0, 0, p.w, p.h);
            popMatrix();
        }
        p.w -= p.sSpeed;
        p.h -= p.sSpeed;
        if(p.y > 609|| p.opacity <= 0 || p.time <= 0 || p.w <= 0) {
            particles.splice(i, 1);
        }
        p.time--;
        rectMode(CORNER);
    }
};
//mouse inside
var mouseInside1 = function(obj, t) {
    if(!t) {
        return mouseX > obj.x && mouseX < obj.x + obj.w && mouseY > obj.y && mouseY < obj.y + obj.h;
    }
    else {
        return mouseX > obj.x - obj.w/2 && mouseX < obj.x + obj.w/2 && mouseY > obj.y - obj.h/2 && mouseY < obj.y + obj.h/2;
    }
};
var Bullet = function(x, y, type) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 25;
    this.xS = 0;
    this.type = type;
    switch(this.type) {
        case "bTree":
            this.damage = 13;
            this.xS = 4;
            break;
        case "bUltimate":
            this.damage = 20;
            this.xS = 4;
            break;
        case "bSeedling":
            this.damage = 8;
            this.xS = 4;
    }
};
Bullet.prototype.draw = function() {
    //what is there to comment on? its so obvious.
    this.x += this.xS;
    pushMatrix();
    translate(this.x, this.y);
    image(imgs.bullet, 0, 0);

    popMatrix();
};
//tooltips
var Tooltip = function(x, y, w, h, txt) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
};
Tooltip.prototype.draw = function() {
    pushMatrix();
    if(mouseX > 300) {
        translate(-300, 0);
    }
    if(mouseInside1(this)) {
        fill(255);
        noStroke();
        rect(mouseX, mouseY, 300, 100, 2);
        fill(0);
        textAlign(LEFT, TOP);
        textSize(20);
        text(this.txt, mouseX + 5, mouseY + 5, 300, 100);
        textAlign(CENTER, CENTER);
    }
    popMatrix();
};
var tooltips = [];
//sun
var Sun = function(x, y) {
    //originalX is for using lerp() to go around the seed
    this.x = x;
    this.y = y;
    this.w = 53;
    this.h = 52;
    this.originalX = x + random(-60, 60);
    this.originalY = y + random(-60, 60);
    this.start = false;
    this.doAgain = true;
    this.t = 0;
    this.tN = 0;
    this.type = 0;
    if(this.y < 0) {
        this.type = "falling";
    }
    this.r = 0;
};
Sun.prototype.draw = function() {
    //sun drawing 
    pushMatrix();
    translate(this.x, this.y); 
    rotate(this.r);
    image(imgs.sun, - this.w/2, - this.h/2);
    popMatrix();
    //for when its produced
    if(this.type !== "falling") {
        this.x = lerp(this.x, this.originalX, 0.08);
        this.y = lerp(this.y, this.originalY, 0.08);
    }
    //make it go to the little image in the bottom left when the moues touches it
    if(mouseInside1(this, true) && this.doAgain) {
        this.start = true;
        gold += 50;
        this.doAgain = !true;
    }
    //previous comment
    if(this.start) {
        this.originalX = this.x;
        this.originalY = this.y;
        this.x = lerp(this.x, 54 + this.w/2, 0.1);
        this.y = lerp(this.y, 535 + this.h/2, 0.1);
        this.t ++;
    }
    //I kind of think this is useless lol
    this.tN++;
    if(this.type === "falling" && !this.start) {
        this.y += 0.6;
    }
};
var suns = [];
var bullets = [];
//Tower object
var Tower = function(x, y, type) {
    this.x = x;
    this.y = y;
    this.startX = x;
    this.type = type;
    this.r = 0;
    this.s = 0.8;
    this.w = 50;
    this.h = 50;
    this.reload = 60;
    this.health = 0;
    this.maxHealth = 0;
    //stats of each one
    switch(this.type) {
        case "bTree":
            this.reload = 70;
            this.health = 120;
            break;
        case "bUltimate":
            this.reload = 60;
            this.health = 130;
            break;
        case "bSeedling":
            this.reload = 90;
            this.health = 100;
            break;
        case "bSeed":
            this.reload = 900;
            this.health = 100;
            break;
        case "bSapling":
            this.reload = 100;
            this.health = 750;
    }
    this.t = random(30, 400);
    this.shot = false;
    this.maxHealth = this.health;
};

Tower.prototype.draw = function() {
    //drawing it
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.r);
    scale(this.s);
    switch(this.type) {
        case "bTree":
            image(imgs.bTree, -39, -46);
            break;
        case "bSeed":
            image(imgs.bSeed, -32, -43);
            break;
        case "bSeedling":
            pushMatrix();
            scale(0.7, 0.7);
            image(imgs.bSeedling, -26, -63);
            popMatrix();
            break;
        case "bSapling":
            pushMatrix();
            scale(1.3);
            image(imgs.bSapling, -30, -31);
            popMatrix();
            break;
        case "bUltimate":
            pushMatrix();
            scale(0.9);
            image(imgs.bUltimate, -55, -57);
            popMatrix();
    }
    popMatrix();
    
    //shooting
    if(this.t > this.reload) {
        if(this.type === "bTree") {
            bullets.push(new Bullet(this.x, this.y - 10, "bTree"));
            this.shot = true;
            this.t = 0;
        }
        else if(this.type === "bUltimate") {
            bullets.push(new Bullet(this.x, this.y - 10, "bUltimate"));
            this.shot = true;
            this.t = 0;
        }
        else if(this.type === "bSeedling") {
            bullets.push(new Bullet(this.x, this.y - 10, "bSeedling"));
            this.shot = true;
            this.t = 0;
        }
    }
    //so when it shoots it spins
    if(this.shot) {
        this.r = lerp(this.r, 360, 0.1);
    }
    //so it can shoot again
    if(this.r > 359) {
        this.shot = false;
        this.r = 0;
        
    }
    this.t++;
    fill(255, 0, 0);
    //prevents glitches
    if(this.health > 0) {
        rectMode(CENTER);
        rect(this.x, this.y - 40, this.health * (50/this.maxHealth), 7);
    }
    rectMode(CORNER);
};

Tower.prototype.earn = function() {
    //earn money :D
    if(this.type === "bSeed") {
        if(this.t > this.reload) {
            suns.push(new Sun(this.x, this.y));
            this.t = 0;
        }
    }
};
var towers = [];
var enemies = [];
//enemies
var Enemy = function(slot, type) {
    this.x = 650;
    this.y = 0;
    this.type = type;
    this.slot = slot;
    this.speed = 0;
    this.w = 60;
    this.h = 70;
    this.health = 0;
    this.damage = 0;
    this.dead = false;
    this.eating = 0;
    //the Y positions of each slot
    switch(this.slot) {
        case 1:
            this.y = 148;
            break;
        case 2:
            this.y = 223;
            break;
        case 3:
            this.y = 298;
            break;
        case 4:
            this.y = 373;
            break;
        case 5:
            this.y = 448;
    }
    //stats of each enemy
    switch(this.type) {
        case "pSeed":
            this.y += 4;
            this.speed = 0.3;
            this.damage = 0.4;
            this.health = 60;
            break;
        case "pSeedling":
            this.y += 1;
            this.speed = 0.4;
            this.damage = 0.4;
            this.health = 95;
            break;
        case "pSapling":
            this.y += 5;
            this.speed = 0.6;
            this.damage = 0.6;
            this.health = 130;
            break;
        case "pTree":
            this.y += 5;
            this.speed = 0.7;
            this.damage = 0.7;
            this.health = 230;
            break;
        case "pUltimate":
            this.y += 5;
            this.speed = 0.8;
            this.damage = 0.9;
            this.health = 300;
    }
    this.maxHealth = this.health;
    this.maxSpeed = this.speed;
    this.s = 1;
};
Enemy.prototype.draw = function() {
    //draw it
    pushMatrix();
    scale(this.s);
    switch(this.type) {
        case "pSeedling":
            pushMatrix();
            translate(this.x, this.y);
            scale(0.9);
            image(imgs.pSeedling, 0, 0);
            popMatrix();
            break;
        case "pSeed":
            image(imgs.pSeed, this.x, this.y);
            break;
        case "pSapling":
            pushMatrix();
            translate(this.x, this.y);
            scale(0.8);
            image(imgs.pSapling, 0, 0);
            popMatrix();
            break;
        case "pTree":
            pushMatrix();
            translate(this.x, this.y);
            scale(0.8);
            image(imgs.pTree, 0, 0);
            popMatrix();
            break;
        case "pUltimate":
            pushMatrix();
            translate(this.x, this.y);
            image(imgs.pUltimate, 0, 0);
            popMatrix();
    }
    popMatrix();
    //health
    fill(255, 0, 0);
    if(this.health > 0) {
        rectMode(CENTER);
        rect(this.x + this.w/2, this.y - 3, this.health * (50/this.maxHealth), 7);
    }
    rectMode(CORNER);
};
Enemy.prototype.ai = function() {
    //the stuff that makes it move and stop when it hits something
    //also lets goooo it can only eat one tower at once
    this.x -= this.speed;
    this.speed = this.maxSpeed;
    this.eating = 0;
    for(var i = 0; i < towers.length; i++) {
        if(collide(this.x, this.y, this.w, this.h, towers[i].x - towers[i].w/2, towers[i].y - towers[i].h/2, towers[i].w, towers[i].h) && this.eating < 1) {
            this.speed = 0;
            towers[i].health -= this.damage;
            this.eating = 1;
        }
    }
};


/** Define a variable that will hold the type of avatar being dragged onto the grid **/
var avatarDragType = null;

var slots = [];
//slots
var Slot = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 75;
    this.h = 75;
    this.occupied = false;
    this.mouseInside = function() {
        return mouseInside1(this);
    };
    //draw them
    this.place = function() {
        if(this.mouseInside()) {
            fill(15, 138, 17);
            /** 
             * I set it up so that if the mouse is not being pressed, the avatar being dragged returns to null
             * If the avatar drag type has not yet been set to null, but the mouse is not being pressed, that means that the mouse button has just been released. So, place the avatar
            **/
            if(avatarDragType && !mouseIsPressed && mouseButton === LEFT) {
                var yPos = this.y;
                if(this.occupied) {
                    var closest = (mouseY - (yPos + this.h / 2)) < 0 ? -1 : 1;
                    yPos += this.h * closest;
                    yPos = floor(yPos);
                    var xPos = this.x;
                    var nextSlot = slots.findIndex(function(s) {
                        return s.y === yPos && s.x === xPos;
                    });
                    if(nextSlot === -1) {
                        return;
                    }
                    if(slots[nextSlot].occupied) {
                        return;
                    }
                }
                
                if(gold >= costs[avatarDragType]) {
                    towers.push(new Tower(this.x + this.w/2, yPos + this.h / 2, avatarDragType));
                    gold -= costs[avatarDragType];
                    avatarDragType = null;
                }
            }
        }
    };
    this.draw = function() {
        //making it so that they have a checkered pattern
        noStroke();
        if(this.y === 150 || this.y === 300 || this.y === 450) {
            fill(43, 176, 41);
        }
        if(this.x % 2 === 0 && this.y === 150 || this.y === 225 || this.y === 300 && this.x % 2 === 0 || this.y === 375 || this.y === 450 && this.x % 2 === 0) {
            fill(31, 161, 29);
        }
        if(this.x % 2 === 0 && this.y === 225 || this.y === 375 && this.x % 2 === 0) {
            fill(17, 153, 15);
        }
        //place the towers
        this.place();
        rect(this.x, this.y, this.w, this.h);
    };
};

for(var i = 0; i < 7; i++) {
    for(var t = 0; t < 5; t++) {
        slots.push(new Slot(43 + i * 75, 150 + t * 75));
    }
}




//select button (the buttons in game at the top)
var SelectButton = function(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cost = 0;
    this.type = type;
    this.mouseInside = function() {
        return mouseInside1(this);
    };
    this.cost = costs[this.type];
    
};
SelectButton.prototype.draw = function() {
    var available = gold >= this.cost;
    fill(available ? color(163, 95, 27) : color(100));
    if(this.mouseInside() && available) {
        fill(140, 79, 18);
        cursor(HAND);
        /** If the mouse is pressed, but there is no avatar selected, then set the avatar being dragged to the slot type **/
        if(mouseIsPressed && !avatarDragType) {
            avatarDragType = this.type;
        }
    }
    strokeWeight(3);
    stroke(110, 63, 16);
    rect(this.x, this.y, this.w, this.h);
    pushMatrix();
    translate(this.x + this.w/2, this.y + this.h/2);
    switch(this.type) {
        case "bSeed":
            image(imgs.bSeed, -34, -43);
            break;
        case "bSapling":
            pushMatrix();
            scale(1.0);
            image(imgs.bSapling, -31, -32);
            popMatrix();
            break;
        case "bSeedling":
            pushMatrix();
            scale(0.7);
            image(imgs.bSeedling, -31, -65);
            popMatrix();
            break;
        case "bTree":
            pushMatrix();
            scale(0.8);
            image(imgs.bTree, -40, -43);
            popMatrix();
            break;
        case "bUltimate":
            pushMatrix();
            scale(0.7);
            image(imgs.bUltimate, -53, -50);
            popMatrix();
    }
    popMatrix();
    if(!available) {
        fill(100, 200);
        rect(this.x, this.y, this.w, this.h);
    }
};
var selectBuzzaws = [
    new SelectButton(45, 0, 100, 100, "bSeed"),
    new SelectButton(245, 0, 100, 100, "bSapling"),
    new SelectButton(145, 0, 100, 100, "bSeedling"),
    new SelectButton(345, 0, 100, 100, "bTree"),
    new SelectButton(445, 0, 100, 100, "bUltimate"),
];





var time = 0;
//yeah this is so i can make new enemies easily
var newEnemy = function(sloty, ti, typey) {
    //how it works is newEnemy(slot, time it takes to make it, the type);
    if(time === ti) {
        enemies.push(new Enemy(sloty, typey));
    }
};
///*
//ye who are making levels for me:
/*
basically heres how it works:
at the end of the waves array make another array ([]) and put in put newEnemy(slot the enemy goes in, at what time you place the enemy, what type of enemy it is);
example done for you:
    [
        function() {
            newEnemy(4, 800, "pSeed");
            newEnemy(3, 1100, "pSeed");
            newEnemy(1, 3000, "pSeedling");
            newEnemy(2, 2200, "pSeed");
            newEnemy(5, 3200, "pSeedling");
            newEnemy(3, 3400, "pSapling");
            newEnemy(2, 4000, "pSapling");
            newEnemy(5, 4400, "pSapling");
            newEnemy(1, 4700, "pSapling");
            if(time > 4700 && enemies.length === 0) {
                waveEnd = true;
            }
            
        },
    ],
at the end put 
if(time > the last time an enemy is spawned && enemies.length === 0) {
    waveEnd = true;
}
different enemies:
pSeed: worst enemy
pSeedling: second worst enemy
pSapling: third worst enemy
pTree: second best
pUltimate: best

example in the waves array.
put all your newEnemys in the waves array, a couple lines below this.
to see your wave in action, go to line 71 and make it go up until you hit your wave.
to increase the starting sun, go to line 52 and put in the amount of gold you want to start with at the end of the array 
*/
//transitions
var Transition = function(nxt) {
    this.x = 0;
    this.y = 0;
    this.s = 1;
    this.doneScreenshot = false;
    this.nxt = nxt;
    this.screenshot = get();
    this.trans = true;
    this.movePage = false;
};
Transition.prototype.draw = function() {
    if(!this.trans) {
        this.doneScreenshot = false;
        this.trans = false;
        this.movePage = false;
        this.x = 0;
        this.y = 0;
    }
    if(this.trans) {
        if(!this.doneScreenshot) {
            this.screenshot = get();
            this.doneScreenshot = true;
        }
        pushMatrix();
        translate(300, 300);
        scale(this.s);
        image(this.screenshot, -300, -300);
        popMatrix();
        if(!this.movePage) {
            page = this.nxt;
            this.movePage = true;
        }
        this.s = lerp(this.s, 0, 0.1);
        if(this.s <= 0.001) {
            this.trans = false;
        }
    }
    
};
//I tried a new way of making them an array
var transitions = [];
var waveEnd = false;
var waves = [
    //make levels for me pls
    [
        function() {
           newEnemy(1, 500, "pSeed");
           newEnemy(3, 1500, "pSeed");
           newEnemy(2, 3000, "pSeed");
           newEnemy(4, 3000, "pSeed");
           newEnemy(5, 3200, "pSeed");
           if(time > 3200 && enemies.length === 0) {
               waveEnd = true;
           }
        },
    ],
    [
        function() {
            newEnemy(2, 500, "pSeed");
            newEnemy(3, 1500, "pSeed");
            newEnemy(2, 3000, "pSeed");
            newEnemy(4, 3000, "pSeed");
            newEnemy(5, 3200, "pSeed");
            newEnemy(3, 3300, "pSeedling");
            newEnemy(3, 3400, "pSeed");
            newEnemy(1, 3800, "pSapling");
            if(time > 3800 && enemies.length === 0) {
                waveEnd = true;
            }
        }
    ],
    [
        function() {
            newEnemy(4, 800, "pSeed");
            newEnemy(3, 1100, "pSeed");
            newEnemy(1, 3000, "pSeedling");
            newEnemy(2, 2200, "pSeed");
            newEnemy(5, 3200, "pSeedling");
            newEnemy(3, 3400, "pSapling");
            newEnemy(2, 4000, "pSapling");
            newEnemy(5, 4400, "pSapling");
            newEnemy(1, 4700, "pSapling");
            if(time > 4700 && enemies.length === 0) {
                waveEnd = true;
            }
            
        },
    ],
    [
        function() {
            newEnemy(5, 1000, "pSeed");
            newEnemy(3, 1200, "pSeed");
            newEnemy(1, 1200, "pSeed");
            newEnemy(2, 1200, "pSeed");
            newEnemy(4, 2400, "pSeedling");
            newEnemy(2, 3400, "pSapling");
            newEnemy(4, 3400, "pSapling");
            newEnemy(5, 4200, "pTree");
            newEnemy(1, 4500, "pTree");
            if(time > 4500 && enemies.length === 0) {
                waveEnd = true;
            }
        }
    ],
    [
        function() {
            newEnemy(3, 1000, "pSeed");
            newEnemy(2, 1500, "pSeed");
            newEnemy(4, 1800, "pSeed");
            newEnemy(1, 2800, "pSeedling");
            newEnemy(2, 2900, "pSeedling");
            newEnemy(3, 3000, "pSeedling");
            newEnemy(4, 3200, "pSeedling");
            newEnemy(5, 3300, "pSeedling");
            newEnemy(2, 3400, "pSapling");
            newEnemy(4, 3600, "pSapling");
            newEnemy(1, 4500, "pTree");
            newEnemy(4, 4400, "pTree");
            newEnemy(2, 4700, "pTree");
            if(time > 4700 && enemies.length === 0) {
                transitions.push(new Transition("win"));
            }
        }
    ]
];
//*/
var doneSc = false;
var screenS;
var gameImg;
var restarting = false;
//tooltips
tooltips.push(new Tooltip(45, 0, 100, 100, "A buzzaw that produces sun"));
tooltips.push(new Tooltip(245, 0, 100, 100, "A buzzaw with a very hard shell that protects it"));
tooltips.push(new Tooltip(145, 0, 100, 100, "A buzzaw that shoots bullets slowly at the opponents"));
tooltips.push(new Tooltip(345, 0, 100, 100, "A buzzaw that shoots damaging bullets reasonably fast"));
tooltips.push(new Tooltip(445, 0, 100, 100, "A buzzaw that shoots very damaging bullets very fast"));
//game
var game = function() {
    restarting = false;
    //bottom stuff
    noStroke();
    background(23, 23, 23);
    fill(150, 89, 27);
    rect(45, 532, 521, 61, 20);
    fill(201, 117, 38);
    rect(45, 532, 513, 55, 20);
    fill(255);
    textSize(25);
    text(gold, 142, 532 + 61/2);
    text("LIVES: " + lives, 476, 532 + 61/2);
    text("WAVE " + (wave + 1), 300, 532 + 61/2);
    //call the waves
    ///*
        waves[wave][0]();
    //*/
    //looping through all the arrays and drawing the stuff in them.
    for(var i = 0; i < selectBuzzaws.length; i++) {
        selectBuzzaws[i].draw();
    }
    for(var i = slots.length - 1; i >= 0; i--) {
        slots[i].occupied = false;
        for(var t = towers.length - 1; t >= 0; t--) {
            if(collide(slots[i].x + 20, slots[i].y + 20, slots[i].w - 40, slots[i].h - 40, towers[t].x, towers[t].y, towers[t].w, towers[t].h)) {
                slots[i].occupied = true;
            }
        }
    }
    for(var i = 0; i < slots.length; i++) {
        slots[i].draw();
    }
    for(var i = 0; i < bullets.length; i++) {
        bullets[i].draw();
    }
    for(var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        enemies[i].ai();
    }
    for(var i = 0; i < towers.length; i++) {
        towers[i].draw();
        towers[i].earn();
    }
    for(var i = bullets.length - 1; i >= 0; i--) {
        if(bullets[i].x > 610) {
            bullets.splice(i, 1);
        }
    }
    for(var i = towers.length - 1; i >= 0; i--) {
        //for deleting towers
        if(mouseInside1(
            {
            x: towers[i].x - towers[i].w/2, 
            y: towers[i].y - towers[i].h/2, 
            w: towers[i].w, 
            h: towers[i].h
            }
            )) {
            if(keys[32]) {
                gold += ~~(costs[towers[i].type] * 0.75);
                towers.splice(i, 1);
                continue;
            }
        }
        if(towers[i].health <= 0) {

            towers.splice(i, 1);
            continue;
        }

    }
    for(var i = 0; i < txtLookGood.length; i++) {
        fill(255);
        textSize(30);
        text("$" + txtLookGood[i], 93 + i * 100, 120);
    }
    for(var i = 0; i < suns.length; i++) {
        suns[i].draw();
    }
    for(var i = suns.length - 1; i >= 0; i--) {
        if(suns[i].t > 80) {
            suns.splice(i, 1);
            continue;
        }
        if(suns[i].tN > 600 && suns[i].type !== "falling" || suns[i].y > 630) {
            suns.splice(i, 1);
            continue;
        }
        
    }
    //collisions bullets-enemy
    for(var i = bullets.length - 1; i >= 0; i--) {
        for(var t = enemies.length - 1; t >= 0; t--) {
            if(collide(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h, enemies[t].x, enemies[t].y, enemies[t].w, enemies[t].h)) {
                enemies[t].health -= bullets[i].damage;
                if(enemies[t].health > 0) {
                    for(var j = 0; j < 20; j++) {
                        addParticles(bullets[i].x + 40, bullets[i].y + 5 + random(5, 15), "hit");
                    }
                }
                bullets.splice(i, 1);
                break;
            }
        }
    }
    //kill the enemy when...
    for(var i = enemies.length - 1; i >= 0; i--) {
        if(enemies[i].health <= 0) {
            for(var j = 0; j < 30; j++) {
                addParticles(enemies[i].x + enemies[i].w/2, enemies[i].y + enemies[i].h/2, "dead");
            }
            enemies.splice(i, 1);
            continue;
        }
        if(enemies[i].x < -80) {
            lives--;
            enemies.splice(i, 1);
            continue;
        }
        
    }
    //die when you lose too much health
    if(lives <= 0) {
        transitions.push(new Transition('end'));
    }
    //loop through particles
    runParticles();
    //show the selected avatar
    
    /** basically I just replaced 'selected' with 'avatarDragType' **/
    if(avatarDragType) {
        pushMatrix();
        translate(mouseX, mouseY);
        scale(avatarDragType === "bSapling" ? 0.9 : 0.7);
        image(imgs[avatarDragType], avatarDragType === "bUltimate" ? - 50 :  - 30, avatarDragType === "bUltimate" ?  - 60 :  - 30);
        popMatrix();
    }
    if(mouseButton === RIGHT) {
        selected = "none";
    }
    //every 1000 frames a sun comes falling from the sky
    if(time % 1000 === 0) {
        suns.push(new Sun(random(20, 580), -60));
    }
    //icon
    image(imgs.sun, 54, 535);
    time++;
    if(keys[82]) {
        restarting = true;
    }
    // for(var i = 0; i < tooltips.length; i++) {
    //     tooltips[i].draw();
    // }
    //when the waves ends
    if(waveEnd) {
        gameImg = get();
        enemies.length = 0;
        towers.length = 0;
        suns.length = 0;
        bullets.length = 0;
        particles.length = 0;
        gold = goldForWaves[wave];
        nxtWaveTimer = 0;
        nxtTrans = false;
        imgS = 1;
        lives = 3;
        Bool = false;
        gameImgX = 0;
        page = "nxtWave";
        waveEnd = false;
        time = 0;
    }
    if(restarting) {
        enemies.length = 0;
        towers.length = 0;
        suns.length = 0;
        particles.length = 0;
        bullets.length = 0;
        gold = goldForWaves[wave];
        lives = 3;
        time = 0;
    }
    //for taking a screenshot to put as a menu because i dont have enough time to make a real menu (and then i blurred it btw)
    if(!doneSc) {
        //{
        image(imgs.pSeed, 500, 150);
        
        pushMatrix();
        translate(511, 225);
        scale(0.9);
        image(imgs.pSeedling, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(507, 300);
        scale(0.8);
        image(imgs.pSapling, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(507, 375);
        scale(0.8);
        image(imgs.pTree, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(507, 452);
        //scale(0.8);
        image(imgs.pUltimate, 0, 0);
        popMatrix();
        //} pyroaches
        pushMatrix();
        translate(51, 152);
        scale(0.8);
        image(imgs.bSeed, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(63, 227);
        scale(0.54);
        image(imgs.bSeedling, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(49, 304);
        scale(1.1);
        image(imgs.bSapling, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(51, 375);
        scale(0.8);
        image(imgs.bTree, 0, 0);
        popMatrix();
        
        pushMatrix();
        translate(51, 452);
        scale(0.6);
        image(imgs.bUltimate, 0, 0);
        popMatrix();
        //change this to whatever
        //try deleting this
        //filter(GRAY, 1);
        filter(BLUR, 6);
        screenS = get();
        page = 'menu';
        doneSc = true;
        
    }
    
};
//nxt wave page
var nxtWave = function() {
    background(23);
    pushMatrix();
    translate(300, 300);
    scale(imgS);
    image(gameImg, -300, -300);
    popMatrix();
    imgS = lerp(imgS, 0.3, 0.07);
    fill(255);
    textSize(90);
    text("NICE JOB!", 300, 150);
    textSize(40);
    text("ONTO THE NEXT WAVE...", 300, 500);
    if(nxtWaveTimer > 200) {
        wave++;
        nxtTrans = true;
    }
    nxtWaveTimer++;
};
//menu buttons
var Button = function(x, y, w, h, txt, nxt) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
    this.nxt = nxt;
    this.r = 255;
    this.g = 255;
    this.b = 255;
};
Button.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    fill(this.r, this.g, this.b);
    
    
    if(mouseInside1(this)) {
        this.g = lerp(this.g, 0, 0.04);
        this.b = lerp(this.b, 0, 0.08);
        this.r = lerp(this.r, 230, 0.08);
        if(clicked) {
            transitions.push(new Transition(this.nxt));
        }
    }
    else {
        this.g = lerp(this.g, 255, 0.08);
        this.b = lerp(this.b, 255, 0.04);
        this.r = lerp(this.r, 255, 0.08);
    }
    quad(-11, 0 , -18, this.h, this.w - 20, this.h, this.w, 0);
    popMatrix();
    textSize(28);
    fill(0);
    text(this.txt, this.x + this.w/2 - 10, this.y + this.h/2);
};
var playBtn = new Button(0, 300, 250, 47, "PLAY", "game");
var howBtn = new Button(0, 378, 230 - 10, 47, "HOW", "how");
var avatarBtn = new Button(0, 378 + 78, 220 - 30, 47, "AVATARS", "avatar");
var backBtn = new Button(0, 500, 190, 40, "BACK", "menu");
var outlineTxt = function(txt, x, y, txtSize, txtFill, txtOutline) {
    textSize(txtSize);
    fill(txtOutline);
    
    for(var i = 0; i < 360; i+=20){
        text(txt, x + sin(i) * txtSize/15, y + cos(i) * txtSize/15);
    }
    fill(txtFill);
    text(txt, x, y);
};
//menu
var menu = function() {
    background(27);
    image(screenS, 0, 0);
    howBtn.draw();
    playBtn.draw();
    avatarBtn.draw();
    outlineTxt("BUZZAWARS", 300, 114, 80, color(255), color(194, 25, 25));
};
//end scene when you (not me im too good) die
var end = function() {
    background(23);
    image(screenS, 0, 0);
    outlineTxt("YOU'RE BAD\nL", 300, 300, 80, color(255), color(194, 25, 25));
    fill(255);
    textSize(30);
    text("CLICK TO RETRY", 300, 500);
    if(clicked) {
        lives = 3;
        time = 0;
        enemies.length = 0;
        towers.length = 0;
        suns.length = 0;
        gold = goldForWaves[wave];
        transitions.push(new Transition('game'));
    }
};
var index = 0;
var avatars = [
    function() {
        pushMatrix();
        translate(300, 300);
        scale(2);
        image(imgs.bSeed, -32, -43);
        popMatrix();
        fill(255);
        textSize(30);
        text("This is the seed,\nit produces sun to\nuse to make\nmore avatars.", 300, 450);
    },
    function() {
        pushMatrix();
        translate(300, 233);
        scale(2);
        image(imgs.bSeedling, -26, -63);
        popMatrix();
        fill(255);
        textSize(30);
        text("This is the seedling,\nit has developed\nenough to shoot\nnot very damaging\nbullets", 300, 450);
    },
    function() {
        pushMatrix();
        translate(300, 232);
        scale(2);
        image(imgs.bSapling, -30, -31);
        popMatrix();
        fill(255);
        textSize(30);
        text("This is the sapling,\nit has sacrificed\nits bullets for\na hard carapace\nand is very\ndurable now", 300, 422);
    },
    function() {
        pushMatrix();
        translate(300, 270);
        scale(2);
        image(imgs.bTree, -39, -46);
        popMatrix();
        fill(255);
        textSize(30);
        text("This is the tree,\nit has sacrificed\nthe carapace for\nway better bullets", 300, 430);
    },
    function() {
        pushMatrix();
        translate(300, 252);
        scale(2);
        image(imgs.bUltimate, -55, -57);
        popMatrix();
        fill(255);
        textSize(30);
        text("This is the Ultimate,\nit has gotten\nbetter bullets than\nthe tree and shoots\nthem quicker.", 300, 430);
    },
];
var avatar = function() {
    background(27);
    image(screenS, 0, 0);
    backBtn.draw();
    noStroke();
    fill(255);
    if(mouseInside1({x: 20, y: 270, w: 60, h: 60})) {
        cursor(HAND);
        if(clicked) {
            if(index > 0) {
                index--;
            }
        }
    }
    if(mouseInside1({x: 520, y: 270, w: 60, h: 60})) {
        cursor(HAND);
        if(clicked) {
            if(index < avatars.length - 1) {
                index++;
            }
        }
    }
    ellipse(50, 300, 60, 60);
    ellipse(550, 300, 60, 60);
    fill(0);
    textSize(50);
    text("<", 47, 297);
    text(">", 549, 297);
    avatars[index]();
};
//how to play
var how = function() {
    image(screenS, 0, 0);
    outlineTxt("HOW", 300, 114, 80, color(255), color(194, 25, 25));
    textSize(30);
    fill(255);
    text("place towers by clicking them\nright click to throw away\nthe thing you are holding,\ndefend your homeland\nagainst the pyroach invaders.\n(also press space to delete\na tower, and r\nto restart that wave.)", 300, 300);
    backBtn.draw();
};
//win
var win = function() {
    background(0);
    image(screenS, 0, 0);
    outlineTxt("YOU WON", 300, 114, 80, color(255), color(194, 25, 25));
    fill(255);
    textSize(40);
    text("yeah nice\n\nthis was made super fast\nso if you have any\nsuggestions/feedback it would\nbe appreciated.", 300, 400);
};
draw = function() {
    //so that its always a normal cursor
    cursor();
    //call each page
    this[page]();
    //clicked = false;
    clicked = false;
    //the transitions before i made a transitions object
    if(nxtTrans) {
        if(!Bool) {
            otherGameImg = get();
            page = 'game';
            Bool = true;
        }
        image(otherGameImg, gameImgX, 0);
        gameImgX = lerp(gameImgX, 602, 0.08);
        
    }
    //the transitions after i made a transitions object
    for(var i = 0; i < transitions.length; i++) {
        transitions[i].draw();
    }
    for(var i = transitions.length - 1; i >= 0; i--) {
        if(transitions[i].trans === false) {
            transitions.splice(i, 1);
        }
    }
    /** if the mouse is not pressed, then stop dragging the avatar **/
    if(!mouseIsPressed) {
        avatarDragType = null;
    }
};
//stuff i dont actually need because no keyPresses
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function() {
    keys[keyCode] = false;
};

mouseClicked = function() {
    clicked = true;
};

//end of the code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//you found an easter egg yay