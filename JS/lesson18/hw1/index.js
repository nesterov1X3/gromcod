export function saveCalls(func) {
    const calls = [];

    function withMemory(...arg) {
        calls.push(arg);
        return func.apply(this, arg);
    }
    withMemory.calls = calls;
    return withMemory;
};