export class Point {
    private x: number;
    private y: number;

     //@ts-ignore
     constructor(){
        this.x = 0;
        this.y = 0;
    };

    //@ts-ignore
     constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    };

    public getX (): number {return this.x};    
    public getY (): number {return this.y};


    toString(): string{
        return `"(${this.x}, ${this.y})"`
    };

    //@ts-ignore
    distance(x: number, y: number): number{
        //AB = √(xb - xa)2 + (yb - ya)2
        return Math.sqrt( ( (this.x - x) ** 2) + ( (this.y - y) ** 2) )

    };

    //@ts-ignore
    distance(other: Point): number{
        //AB = √(xb - xa)2 + (yb - ya)2
        return Math.sqrt( ( (this.x - other.getX()) ** 2) + ( (this.y - other.getY()) ** 2) )

    };

    //@ts-ignore
    distance(): number{
        //AB = √(xb - xa)2 + (yb - ya)2
        return Math.sqrt( ( (+this.x - 0) ** 2) + ( (+this.y - 0) ** 2) )


    };
}