import React, { Component } from "react";
import Sketch from "react-p5";

class LoveTriangles extends Component {

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(
            canvasParentRef
        );
        p5.angleMode(p5.DEGREES);
        p5.stroke(251,192,224, 100);
        // p5.stroke(50,220,169, 100);
        // p5.stroke(59,39,120, 100);
    }

    draw = (p5) => {

        p5.background(0, 120);

        let angle = 108;
        let val = 0.50;
        let interval = 180;
        let inc = 0.75;

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
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }
}

export default LoveTriangles;
