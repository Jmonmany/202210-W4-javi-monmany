export function strictEquals(a, b) {
    let result = Object.is(a, b);
    if (Number.isNaN(a) & Number.isNaN(b)) {
        result = false;
        console.log('RESULT: ', result);
        return;
    }
    if (Object.is(-Infinity, 1 / a) || Object.is(-Infinity, 1 / b)) {
        result = true;
        console.log('RESULT: ', result);
        return;
    }
    console.log('RESULT: ', result);
}
