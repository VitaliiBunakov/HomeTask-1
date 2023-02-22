import {Shape} from "./Shape"
import {Point} from "./Point";


export class Triangle extends Shape {
    private pointA : Point;
    private pointB : Point;
    private pointC : Point;

    //@ts-ignore
    constructor(points: Point[], color?: string, filled?: boolean) {
        super(points, color, filled);
        if (this.isATriangle(points)) {
            throw 'That`s not a triangle'
        }
        this.pointA = points[0];
        this.pointB = points[1];
        this.pointC = points[2];
    }

    //@ts-ignore
    constructor(pointA: Point, pointB: Point, pointC: Point, color?: string, filled?: boolean) {
        super([pointA, pointB, pointC], color, filled);
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    private isATriangle(points: Point[]): boolean {
        console.log(`points.length ${points.length}`);
        return 3 !== points.length
    };

    public toString(): string {
        return `Triangle[v1=( ${this.pointA.getX()}, ${this.pointA.getY()}),v2=(${this.pointB.getX()}, ${this.pointB.getY()}),v3=(${this.pointC.getX()}, ${this.pointC.getY()})]`
    };

    public getType(): void {
        const sideAB : number = this.pointA.distance(this.pointB);
        const sideBC : number = this.pointB.distance(this.pointC);
        const sideAC : number = this.pointA.distance(this.pointC);

        switch (true) {
            case  (sideAB === sideBC && sideAB === sideAC && sideBC === sideAC) :
            console.log("equilateral triangle");
            break;

            case  (sideAB === sideBC || sideAB === sideAC ||  sideBC === sideAC) :
                console.log("isosceles triangle")
                break;

            default  :
                console.log("scalene triangle")
                break;
        }
    }

}