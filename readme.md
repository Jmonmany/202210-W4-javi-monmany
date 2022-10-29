# Módulo 2 Challenge 1. JS & MentalModels

## strictEquals function

Write in a module of your own, a function called `strictEquals(a, b)` that returns the same value as `a === b`. Your implementation cannot use the `==` or `!==` operators.

| A       | B     | RESULT |                   |
| ------- | ----- | ------ | ----------------- |
| 1       | 1     | true   |                   |
| NaN     | NaN   | false  | // Rule Exception |
| 0       | -0    | true   | // Rule Exception |
| -0      | 0     | true   | // Rule Exception |
| 1       | "1"   | false  |                   |
| true    | false | false  |                   |
| false   | false | true   |                   |
| "Water" | "oil" | false  |
