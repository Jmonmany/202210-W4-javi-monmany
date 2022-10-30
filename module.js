export function strictEquals(a, b) {
    let result = Object.is(a, b);
    if (Number.isNaN(a) & Number.isNaN(b)) {
        result = false; 
        console.log('RESULT: ', result);
        return;
    }
    debugger
    if () {
        
    }
    
    console.log('RESULT: ', result);
}
