import strictEquals from './module.js';

console.table([
    { test: '1 & 1', result: strictEquals(1, 1) },
    { test: 'NaN & NaN', result: strictEquals(NaN, NaN) },
    { test: '0 & -0', result: strictEquals(0, -0) },
    { test: '-0 & 0', result: strictEquals(-0, 0) },
    { test: '1 & "1"', result: strictEquals(1, '1') },
    { test: 'true & false', result: strictEquals(true, false) },
    { test: 'false & false', result: strictEquals(false, false) },
    { test: '"Water" & "oil"', result: strictEquals('Water', 'oil') },
]);

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
