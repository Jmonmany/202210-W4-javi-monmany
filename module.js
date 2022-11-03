export default function strictEquals(a, b) {
    const result = Object.is(a, b);
    if (Number.isNaN(a) & Number.isNaN(b)) {
        return !result;
    }
    if (Object.is(-Infinity, 1 / a) || Object.is(-Infinity, 1 / b)) {
        return !result;
    }
    return result;
}
