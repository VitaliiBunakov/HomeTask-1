

import {Point} from "./classes/Point";
import {Triangle} from "./classes/Triangle";


//Point
// const point0 = new Point();
const point0 = new Point(0,0);
const point1 = new Point(3,4);

console.log(`Point 0: ${point0.getX()}, ${point0.getY()} `);
console.log(`Point 1: ${point1.getX()}, ${point1.getY()} `);
console.log(`Point 1 distance : ${point1.distance()} `);
console.log(`Point 1 distance to point 0 : ${point1.distance(point0)} `);
console.log(`Point 1 distance to point 4,3 : ${point1.distance(4,3)} `);
console.log(`Point 1 to string : ${point1.toString()} `);

//Shape
// try{
//     const notShape = new Triangle([new Point(1,7), new Point(1,24)]);
// }catch (e){
//     console.log(e.message)
// };

const triangle0 = new Triangle([new Point(1,1), new Point(1,2),new Point(2,1)]);
const triangle1 = new Triangle([new Point(2,2), new Point(3,4),new Point(6,4)]," black", true);
console.log(triangle1.toString());
console.log(triangle0.toString());
console.log(triangle0.getType());
console.log(triangle1.getType());
console.log(triangle1.getPerimeter());

// @ts-ignore
const triangle2 = new Triangle( new Point(5,2), new Point(4,9), new Point(7,6));


