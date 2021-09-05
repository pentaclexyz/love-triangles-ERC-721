import React from "react";
import P5Wrapper from "react-p5-wrapper";

function LoveTrianglesFunction() {
    const sketch = (p5) => {

        let angle = 108;
        let val = 0.50;
        let interval = 180;
        let inc = 0.75;

        p5.setup = (canvasParentRef) => {
            p5.createCanvas(window.innerWidth, window.innerHeight).parent(
                canvasParentRef
            );
            p5.noStroke();
            p5.angleMode(p5.DEGREES);
            // p5.background(0,3);
            // p5.stroke(251, 192, 224, 100);
            // p5.stroke(59,39,120, 100);

            // p5.stroke(114,53,77);
            // p5.stroke(129,87,93);
            // p5.stroke(83,101,108, 100);
            // p5.stroke(208,64,79, 100);
            // p5.stroke(200,105,100);
            // p5.stroke(218,98,54);
            // p5.stroke(219,99,57);
            // p5.stroke(232,215,229);
            // p5.stroke(152,91,128);
            // p5.stroke(152,91,128);
            // p5.stroke(231,202,166);
            // p5.stroke(190,135,77);
            // p5.stroke(242,224,176);
            // p5.stroke(228,198,143);
            // p5.stroke(114,53,77);
            // p5.stroke(214,196,167);
            // p5.stroke(254,247,142);
            // p5.stroke(236,187,86);
            // p5.stroke(152,107,106);
            // p5.stroke(187,149,155);
            // p5.stroke(191,143,162);
            // p5.stroke(208,214,174);
            // p5.stroke(184,192,133);
            // p5.stroke(58,89,116);
            // p5.stroke(175,197,172);
            // p5.stroke(23,29,33);
            // p5.stroke(125,148,133);
            // p5.stroke(45,63,71);
            // p5.stroke(83,101,108);
            // p5.stroke(91,94,82);
            // p5.stroke(117,159,148);
            // p5.stroke(43,81,100);
            // p5.stroke(73,112,139);
            // p5.stroke(86,106,120);
            // p5.stroke(94,117,128);
            // p5.stroke(72,79,91);
            // p5.stroke(132,162,185);
            // p5.stroke(74,166,167);
            // p5.stroke(25,126,191);
            // p5.stroke(24,108,171);
            // p5.stroke(96,110,148);
            // p5.stroke(62,69,78);
            // p5.stroke(140,118,146);
            // p5.stroke(129,129,149);
            // p5.stroke(143,137,157);
            // p5.stroke(158,145,162);
            // p5.stroke(100,88,125);
            // p5.stroke(56,42,50);
            // p5.stroke(37,47,36);
            // p5.stroke(55,50,28);
            // p5.stroke(81,49,39);
            // p5.stroke(98,76,44);
            // p5.stroke(19,22,24);
            // p5.stroke(24,21,23);
            // p5.stroke(68,53,46);
            // p5.stroke(29,31,46);
            // p5.stroke(70,70,79);
            // p5.stroke(163,164,165);
            // stroke(91,96,55);
            // stroke(119,116,121,);
            // stroke(152,186,184);
            // stroke(205,209,172);
            // stroke(50,62,76);
            // stroke(145,143,170);
            // stroke(246,209,95);
            // stroke(160,177,170);
            // stroke(208,78,76);
            // stroke(228,160,125);
            // stroke(122,173,174);
            // stroke(115,98,107);
            // stroke(111,97,59);
            // stroke(189,165,64);
            // stroke(138,175,205);
            // stroke(112,244,225);
            // stroke(123,171,183);
            p5.stroke(50,220,169, 100);
        }

        p5.draw = () => {

            let c = p5.createCanvas(810, 810);
            let ctx = c.drawingContext;
            p5.push();
            p5.translate(p5.width / 2, p5.height / 2);
            let gradient = ctx.createRadialGradient(0, 0, 450, 450, 0, 0);
            gradient.addColorStop(0, "rgb(247,237,230)");
            gradient.addColorStop(1, "rgb(236,197,185)");
            ctx.fillStyle = gradient;
            p5.ellipse(0, 0, 2100, 2100);
            p5.pop();

            let branch = (len) => {
                if (len > 1.5) {
                    p5.push();
                    p5.rotate(angle);
                    p5.line(0, 0, 0, -len);
                    p5.translate(0, -len);
                    branch(val * len);
                    p5.pop();
                    p5.push();
                    p5.line(0, 0, 0, -len);
                    p5.translate(0, -len);
                    branch(val * len);
                    p5.pop();
                    p5.push();
                    p5.rotate(-angle);
                    p5.line(0, 0, 0, -len);
                    p5.translate(0, -len);
                    branch(val * len);
                    p5.pop();
                }
                // p5.line(0, 0, 0, -len * 0.67);
            }
            angle += inc;
            p5.translate(p5.width / 2, p5.height / 2 + interval / 2);
            branch(interval);
            if (angle >= 120 || angle <= 24) {
                inc *= -1;
            }
        }
    }
    return <P5Wrapper sketch={sketch}/>;
}

export default LoveTrianglesFunction;
