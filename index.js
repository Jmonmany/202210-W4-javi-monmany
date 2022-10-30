import { strictEquals } from './module.js';

strictEquals(-0, 0);



/*  | A       | B     | RESULT |                   |
    | ------- | ----- | ------ | ----------------- |
    | 1       | 1     | true   |                   | true OKEY
    | NaN     | NaN   | false  | // Rule Exception | true WRONG
    | 0       | -0    | true   | // Rule Exception | false WRONG
    | -0      | 0     | true   | // Rule Exception | false WRONG
    | 1       | "1"   | false  |                   | false OKEY
    | true    | false | false  |                   | false OKEY
    | false   | false | true   |                   | true OKEY
    | "Water" | "oil" | false  |                   | false OKEY
*/    