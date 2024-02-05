onmessage = function (event) {
    const array = event.data;
    const sortedArray = array.slice().sort((a, b) => a - b);
    postMessage(sortedArray);
};
