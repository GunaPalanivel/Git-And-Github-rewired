function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log("Counter:", count);
        },
        decrement: function () {
            count--;
            console.log("Counter:", count);
        },
        getCount: function () {
            return count;
        }
    };
}