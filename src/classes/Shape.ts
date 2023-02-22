import {Point} from "./Point"

export abstract class Shape{
    protected color: string;
    protected filled: boolean;
    protected points: Point[];
    protected isAShape(points: Point[]){
        if(2 >= points.length)  { throw 'That`s not enough for shape'};
    };
    //@ts-ignore
     constructor(points: Point[]){
        this.isAShape(points);
        this.points = points;
        this.color = "green";
        this.filled = true;
    };

    //@ts-ignore
     constructor(points: Point[], color: string, filled: boolean){
        this.isAShape(points);
        this.points = points;
        this.color = color;
        this.filled = filled;
};

    //toString() method that returns "A Shape with color of xxx and filled/Not filled. Points: (x1, y1), (x2, y2)...";
    public toString(): string { return `A Shape with color of ${this.color} and ${this.filled ?  'filled' : 'not filled'}. 
    Points: (${this.points[0].getX()}, ${this.points[0].getY()}), (${this.points[1].getX()}, ${this.points[1].getY()}), (${this.points[2].getX()}, ${this.points[2].getY()})`}

    //getPerimeter() that calculates the perimeter using Point.distance method;
    public getPerimeter():number {
        return +(this.points[0].distance(this.points[1])) + (this.points[1].distance(this.points[2])) + (this.points[0].distance(this.points[2]))
    }
}
